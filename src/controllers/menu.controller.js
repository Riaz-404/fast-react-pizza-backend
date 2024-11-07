import {asyncHandler} from "../utils/asyncHandler.js";
import {Menu} from "../models/menu.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const handleGetMenu = asyncHandler(async (req, res) => {
  const result = await Menu.find({});

  if (!result) throw new ApiError(400, null, "Api response error");

  const menu = [];

  result.map(item => menu.push({
    id: item._id,
    name: item.name,
    imageUrl: item.imageUrl,
    ingredients: item.ingredients,
    unitPrice: item.unitPrice,
    soldOut: item.soldOut,
  }));

  return res
    .status(200)
    .json(new ApiResponse(200, menu, "Success"));
});

export {handleGetMenu};