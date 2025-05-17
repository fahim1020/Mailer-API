// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/submit", async (req, res) => {
  const { name, email, subject, message, receiver } = req.body;

  if (!name || !email || !subject || !message || !receiver) {
    return res
      .status(400)
      .json({ error: "All fields are required, including receiver email" });
  }

  let mailOptions = {
    from: `"${name}" <techgamingbangla@gmail.com>`,
    to: receiver,
    replyTo: email,
    subject: subject,
    text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };
  

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "techgamingbangla@gmail.com",
      pass: "qkie yknp oqyt wtnq",
    },
  });
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
