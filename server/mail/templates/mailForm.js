exports.mailsend = (
    fullName, email, phone, linkedIn, portfolio, Github, education, experience, skills, resume
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div className="container">
          <h2 classname="text-blue-900 bg-white p-1 rounded-lg">Career Hub</h2>
            <div className="message">you have new job application</div>
            <div className="body">
                <p> ${fullName} has shawn interest in the job you posted.</p>
                </p>
                <p>Here are the Applicant details provided:</p>
                <p>Name: ${fullName} </p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>linkedIn: ${linkedIn}</p>
                <p>portfolio: ${portfolio}</p>
                <p>Github: ${Github}</p>
                <p>Education: ${education}</p>
                <p>Experience: ${experience}</p>
                <p>Skills: ${skills}</p>
                <p>Resume: ${resume}</p>

                <p>We appreciate your interest and will get back to you shortly. </p>
            </div>
            <div className="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:info@CareerHub.com">info@CareerHub.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`
  }
  