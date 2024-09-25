import nodemailer from "nodemailer";

// Both of this is from the email host service
const EMAIL_HOST = "smtppro.zoho.in"
const PORT = 465

export const handler = async (event) => {
  // Destrcture
  const { fromName, toName, toEmail, subject, message } = event;


  // Get the environment variables
  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;


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
        error: error,
      }),
    };
  }

};
