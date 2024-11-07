import express, {urlencoded} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(urlencoded({extended: true}));

app.use("/", (req, res) => {
  res.send("<h1 style=\"text-align:center; font-size: 54px\">Fast React Pizza Co.</h1>");
});

export default app;