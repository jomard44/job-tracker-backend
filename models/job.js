import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Applied", "Interviewed", "Offer", "Rejected"],
    default: "Applied",
  },
});

export default mongoose.model("Job", jobSchema);
