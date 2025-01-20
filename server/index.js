// Importing necessary modules and packages
const express = require("express");
const app = express();
const database = require("./Config/Database");
const userRoutes = require("./routes/user");
const jobRoutes = require("./routes/job");
const profileRoutes = require("./routes/profile")
const fileUpload = require("express-fileupload");
const contactUsRoute = require("./routes/Contact");
const mailRoute = require("./routes/mail")
const { cloudinaryConnect } = require("./Config/cloudinary");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

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

// // Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/send", mailRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.