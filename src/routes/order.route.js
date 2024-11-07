import express from "express";
import {handleCreateOrder, handleGetAnOrderDetails} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.route("/").post(handleCreateOrder);
orderRouter.route("/:id").get(handleGetAnOrderDetails);

export {orderRouter};