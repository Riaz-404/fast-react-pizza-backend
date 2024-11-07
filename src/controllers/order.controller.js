import {asyncHandler} from "../utils/asyncHandler.js";
import {Order} from "../models/order.model.js";
import {User} from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const handleCreateOrder = asyncHandler(async (req, res) => {
  const payload = req.body;

  const checkUser = await User.find({phone: payload.phone});
  let user = checkUser;

  if (checkUser.length < 1) {
    user = await User.create({
      name: payload.customer,
      phone: payload.phone,
      address: payload.address,
    });
  }

  const order = await Order.create({...payload, customerId: user[0]._id});

  if (!order) throw new ApiError(500, "", "Order creation failed");

  const updateOrderList = await User.findByIdAndUpdate(order.customerId, {
    $push: {
      orderList: order.orderId,
    },
  });

  if (!updateOrderList) throw new ApiError(500, "", "Order list update failed");

  res.status(201).json(new ApiResponse(201, order, "Order created successfully"));

});

const handleGetAnOrderDetails = asyncHandler(async (req, res) => {
  const orderId = req.params.id;

  const orderDetails = await Order.find({orderId});

  if (!orderDetails) throw new ApiError(404, "", "Order not found");

  res.status(200).json(new ApiResponse(200, orderDetails[0], "Order details fetch successfully"));
});

export {handleCreateOrder, handleGetAnOrderDetails};