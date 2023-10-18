import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGOCONNECT)
  .then(() => {
    console.log("You have successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// APi routes
app.use("/api/user", userRouter);
