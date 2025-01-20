const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
        token: {
            type: String,
        },
        resetPasswordExpires: {
             type: Date,
        },
        accountType: {
            type: String,
            enum: ["Recruiter","Applicant"],
            required: true,
        },
        image: {
            type: String,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile",
        },
        jobs: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "jobpost",
            },
        ],
    }
)
module.exports = mongoose.model("user", userSchema)