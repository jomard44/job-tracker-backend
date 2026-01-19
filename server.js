import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./routes/index.js";

const app = express();

app.use("/api", router);

mongoose.connect(process.env.MONGO).then(
  app.listen(process.env.PORT, () => {
    console.log("server is runing");
  }),
);
