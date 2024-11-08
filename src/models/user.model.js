import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  orderList: [{
    orderId: String,
    estimatedDelivery: Date,
    createdAt: Date,
  }],
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);