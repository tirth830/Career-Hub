const mongoose = require("mongoose");
const { TbArrowUp } = require("react-icons/tb");

// Define the Section schema
const sectionSchema = new mongoose.Schema({
    jobadmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    companyName:{
        type:String,
        required:true
    },
    companyDescription:{
        type:String,
    },
    jobTitle:{
        type:String,
        required:true
    },
  
    jobDescription: {
		type: String,
        required:true
	},
	location:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["full-time", "part-time", "contract", "internship"],
        required:true
    },
    experience:{
        type:String,
        enum:["entry-level", "mid-level", "senior-level"],
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now },
});

// Export the Section model
module.exports = mongoose.model("jobpost", sectionSchema);
