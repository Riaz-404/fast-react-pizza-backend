import express from "express";
import {handleGetMenu} from "../controllers/menu.controller.js";

const menuRouter = express.Router();

menuRouter.route("/").get(handleGetMenu);

export {menuRouter};