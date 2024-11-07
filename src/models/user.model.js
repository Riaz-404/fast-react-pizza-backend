import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  orderList: [{
    type: String,
  }],
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);