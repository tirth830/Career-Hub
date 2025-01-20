const mailSender = require("../utils/mailSender")
const { mailsend } = require("../mail/templates/mailForm")

// Function to send email
exports.mailController= async (req, res) => {
 
    const { fullName, email, phone, linkedIn, portfolio, Github, education, experience, skills, resume, email_jobadmin }  = req.body
    console.log( req.body)

    // Configure Nodemailer with your email service provider
    try {
      const emailRes = await mailSender(
        email_jobadmin,
        "You have recieved new Application for the opportunity you posted",
        mailsend(fullName, email, phone, linkedIn, portfolio, Github, education, experience, skills, resume, email_jobadmin)
      )
      console.log("Email Res ", emailRes)
      return res.json({
        success: true,
        message: "Job Applied send successfully",
      })
    } catch (error) {
      console.log("Error", error)
      console.log("Error message :", error.message)
      return res.json({
        success: false,
        message: "Something went wrong...",
      })
    }
  }

  