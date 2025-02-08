const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true, // ✅ Fixed Typo
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // ⏳ Timeout if DB is unresponsive
    });
    console.log("✅ DB Connection Success");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    process.exit(1); // 🔴 Stop server if DB fails
  }
};
