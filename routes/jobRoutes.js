import express from "express";
import { getJobs,getJob,createJobs,editJob,deleteJob} from "../controllers/jobController.js";

const jobRoutes = express.Router();

jobRoutes.get("/jobs", getJobs);
jobRoutes.get("/jobs/:id",getJob)
jobRoutes.post("/jobs",createJobs)
jobRoutes.put("/jobs/:id",editJob)
jobRoutes.delete("/jobs/:id",deleteJob)

export default jobRoutes;
