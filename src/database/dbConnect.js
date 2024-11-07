import {DB_NAME, DB_URL} from "../constant.js";
import mongoose from "mongoose";

const dbConnect = () => {
  return mongoose.connect(DB_URL, {
    dbName: DB_NAME,
  });
};

export default dbConnect;