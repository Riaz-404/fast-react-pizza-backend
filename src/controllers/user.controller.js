import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const handleLoginUser = asyncHandler(async (req, res) => {
  const {phone} = req.body;

  const user = await User.find({phone});

  if (!user) {
    throw new ApiError(404, "", "User not found");
  }

  res.status(200).json(new ApiResponse(200, user[0], "User login success"));
});

export {handleLoginUser};