// Importing necessary modules and packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

// Importing database and cloudinary connection
const database = require("./Config/Database");
const { cloudinaryConnect } = require("./Config/cloudinary");

// Importing routes
const userRoutes = require("./routes/user");
const jobRoutes = require("./routes/job");
const profileRoutes = require("./routes/profile");
const contactUsRoute = require("./routes/Contact");
const mailRoute = require("./routes/mail");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Connecting to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Connecting to cloudinary
cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/send", mailRoute);

// Testing the server
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
