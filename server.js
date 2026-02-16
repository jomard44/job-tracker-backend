import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [process.env.CLIENT_API, process.env.CLIENT_API2];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use("/api", jobRoutes);
app.use("/api/user", userRoutes);

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
