import mongoose from "mongoose";
import {customAlphabet} from "nanoid";

const orderSchema = new mongoose.Schema({
  orderId: String,
  customer: String,
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  address: String,
  cart: [{
    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
    name: String,
    quantity: Number,
    unitPrice: Number,
    totalPrice: Number,
  }],
  position: String,
  priority: Boolean,
  orderPrice: Number,
  priorityPrice: Number,
  estimatedDelivery: Date,
  status: {
    type: String,
    enum: ["preparing", "delivered"],
  },
}, {timestamps: true});


orderSchema.pre("save", async function (next) {
  this.estimatedDelivery = new Date(new Date().getTime() + 30 * 60000).toISOString();

  const nanoId = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);
  this.orderId = nanoId();

  this.orderPrice = await this.cart.reduce((total, cur) => total + cur.totalPrice, 0);

  if (this.priority) {
    this.priorityPrice = this.orderPrice * 0.2;
  }

  this.status = "preparing";
  next();
});

export const Order = mongoose.model("Order", orderSchema);