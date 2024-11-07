import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: String,
  ingredients: [{
    type: String,
  }],
  unitPrice: Number,
  soldOut: Boolean,
}, {timestamps: true});

export const Menu = mongoose.model("Menu", menuSchema);