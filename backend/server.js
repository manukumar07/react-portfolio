const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manu01", // Your Gmail email address
    pass: "mkp0121", // Your Gmail password or App Password
  },
});

// Endpoint to handle contact form submissions
app.post("/api/form", (req, res) => {
  const { name, email, mobile, message } = req.body;

  // Create email message
  const mailOptions = {
    from: "your-email@gmail.com", // Sender's email address
    to: "palmanukumar53@gmail.com", // Receiver's email address
    subject: "New Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
