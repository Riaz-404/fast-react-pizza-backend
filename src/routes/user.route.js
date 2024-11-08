import express from "express";
import {handleLoginUser} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/login").post(handleLoginUser);

export {userRouter};