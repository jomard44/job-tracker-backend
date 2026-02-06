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
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
});

export default mongoose.model("Job", jobSchema);
