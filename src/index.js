import app from "./app.js";
import "dotenv/config";
import dbConnect from "./database/dbConnect.js";

const port = process.env.PORT;

dbConnect().then((result) => {
  if (result) {
    console.log("MongoDB connected successfully");
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  }
}).catch(error => {
  console.log("MongoDB connection error");
});

