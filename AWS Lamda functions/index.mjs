import nodemailer from "nodemailer";

// Both of this is from the email host service
const EMAIL_HOST = "smtppro.zoho.in"
const PORT = 465

export const handler = async (event) => {
  // Destrcture
  const { fromName, toName, toEmail, subject, message } = event;
  console.log(fromName)
  console.log(toName)
  console.log(toEmail)
  console.log(subject)
  console.log(message)

  // Get the environment variables
  const EMAIL = "test@certimailer.xyz";
  const PASSWORD = "SZ4PN8a2bq6M";


  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: PORT,
    secure: true,  // Use SSL
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  })


  // Mail options
  const mailOptions = {
    from: `${fromName} <${EMAIL}>`,
    to: `${toName} <${toEmail}>`,
    subject: subject,
    text: message,
  }

  // Try sending mail
  try {
    // send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to : ', toEmail)

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent sucessfully",
      })
    }

  } catch (error) {
    console.log("Error while sending email: ", error)
    // Return the response
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send email",
        error: error
      }),
    };
  }

};


// A zip file needs to be created of all the files in AWS Lambda Function folder and then uploaded to AWS
// This can be invoked by hitting the post url with the down mentioned paramters
const EMAIL = "test@certimailer.xyz";
const PASSWORD = "SZ4PN8a2bq6M";