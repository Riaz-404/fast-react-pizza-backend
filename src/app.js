import express, {urlencoded} from "express";
import cors from "cors";
import "dotenv/config";
import {menuRouter} from "./routes/menu.route.js";
import {orderRouter} from "./routes/order.route.js";
import {userRouter} from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(urlencoded({extended: true}));

app.use("/api/user", userRouter);
app.use("/api/menu", menuRouter);
app.use("/api/order", orderRouter);

app.use("/", (req, res) => {
  res.send("<h1 style=\"text-align:center; font-size: 54px\">Fast React Pizza Co.</h1>");
});

export default app;
