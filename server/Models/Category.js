const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	jobs: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "jobpost",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("category", categorySchema);
