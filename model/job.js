import mongoose from "mongoose";

const jobScema = mongoose.Schema({
    company_name: {
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    status: {
        type:String,
        enum:["Applied", "Interviewed", "Offer", "Rejected"],
        default:"Applied"
    },
})

model.exports = mongoose.model("Job",jobScema)