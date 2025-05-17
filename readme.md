# 📧 Mailer API

A simple Node.js API to send emails using Gmail, built with **Express.js** and **Nodemailer**. Perfect for contact forms or basic email services.

---

## 🌐 Live Endpoint

**POST** [`https://mailer-api-aycr.onrender.com/api/submit`](https://mailer-api-aycr.onrender.com/api/submit)

---

## 📌 What This API Does

This API accepts form data and sends an email from a fixed Gmail address (`techgamingbangla@gmail.com`) to any recipient you specify. It’s designed for basic form submissions, like contact pages.

---

## 📥 Request Body

Send a JSON POST request to `/api/submit` with these fields:

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "subject": "Email Subject",
  "message": "The body of the message you want to send",
  "receiver": "recipient@example.com"
}

