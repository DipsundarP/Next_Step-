const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
  const { email } = req.body;

  
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Get in Touch",
      html: "<h1>Congratulations! You Successfully Fill Up The Form.</h1>",
    };

    
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

   
    return res
      .status(201)
      .json({ status: 201, message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Failed to send email", error });
  }
});

module.exports = router;
