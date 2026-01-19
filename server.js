import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
mongoose.connect(process.env.MONGO).then(
  app.listen(process.env.PORT, () => {
    console.log("server is runing");
  }),
);
