import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", jobRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is runing");

    });
  })
  .catch((err) => {
    console.log("error connecting to db", err);
  });
