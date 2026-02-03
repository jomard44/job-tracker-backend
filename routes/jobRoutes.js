import express from "express";
import { auth } from "../middleware/auth.js";
import {
  getJobs,
  getJob,
  createJobs,
  editJob,
  deleteJob,
} from "../controllers/jobController.js";

const jobRoutes = express.Router();

jobRoutes.get("/jobs", auth, getJobs);
jobRoutes.get("/jobs/:id", auth, getJob);
jobRoutes.post("/jobs", auth, createJobs);
jobRoutes.put("/jobs/:id", auth, editJob);
jobRoutes.delete("/jobs/:id", auth, deleteJob);

export default jobRoutes;
