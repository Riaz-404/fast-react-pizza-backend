import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  pizzaId: String,
  name: String,
  unitPrice: Number,
  quantity: Number,
  totalPrice: Number,
}, {timestamps: true});

export const Cart = mongoose.model("Cart", cartSchema);