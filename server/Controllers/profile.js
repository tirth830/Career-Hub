const Profile = require("../Models/Profile")
const Job = require("../Models/Jobpost")
const User = require("../Models/user")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const mongoose = require("mongoose")


// Method for updating a profile
exports.updateProfile = async (req, res) => {
  try {
    const {
      firstName = "",
      lastName = "",
      about = "",
      contactNumber = "",
      gender = "",
    } = req.body;

    const id = req.user.id;
    console.log("User ID:", id);

    // Find the user by id and update firstName, lastName
    const updatedUser = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
    }, { new: true }); // { new: true } ensures we get the updated user object

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    const profile = await Profile.findById(updatedUser.additionalDetails);
      if (!profile) {
        console.error(`Profile not found for user with ID ${id}. AdditionalDetails: ${updatedUser.additionalDetails}`);
        return res.status(404).json({
          success: false,
          error: "Profile not found",
      });
    }

    // Find the profile by additionalDetails
    
    console.log("User additionalDetails:", updatedUser.additionalDetails);

    if (!profile) {
      return res.status(404).json({
        success: false,
        error: "Profile not found",
      });
    }

    // Update the profile fields
    profile.about = about;
    profile.contactNumber = contactNumber;
    profile.gender = gender;

    // Save the updated profile
    await profile.save();

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id;

    // Find the user by id
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Delete the associated profile
    await Profile.findByIdAndDelete(user.additionalDetails);

    // Find and delete all jobs posted by the user
    const userJobs = user.jobs;
    for (const jobId of userJobs) {
      await Job.findByIdAndDelete(jobId);
    }

    // Alternatively, if you want to remove the user from jobs they are associated with (but not posted)
    // for (const jobId of user.jobs) {
    //   await Job.findByIdAndUpdate(
    //     jobId,
    //     { $pull: { users: id } },
    //     { new: true }
    //   );
    // }

    // Now delete the user
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      success: false, 
      message: "User cannot be deleted successfully" 
    });
  }
};


exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()
    console.log(userDetails)
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture
    const userId = req.user.id
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    )
    console.log(image)
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    )
    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


