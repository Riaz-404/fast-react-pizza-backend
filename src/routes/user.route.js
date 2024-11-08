import express from "express";
import {handleGetUser, handleLoginUser} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/login").post(handleLoginUser);
userRouter.route(("/:id")).get(handleGetUser);

export {userRouter};