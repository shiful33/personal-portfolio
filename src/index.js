const express = require("express");
const bodyParser = require("body-parser");
const { MessagingResponse } = require("twilio").twiml;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://shiful-portfolio.netlify.app"],
    credentials: true,
  }),
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); 

// WhatsApp Webhook Route
app.post("/whatsapp", (req, res) => {
  const incomingMsg = req.body.Body.toLowerCase();
  const twiml = new MessagingResponse();

  let replyText = "";

  // Chatbot logic
  if (incomingMsg.includes("hello") || incomingMsg.includes("hi")) {
    replyText = "Hi! I'm Shiful's Assistant. How can I help you today?";
  } else if (incomingMsg.includes("skill")) {
    replyText = "Shiful is an expert in MERN Stack, React, and Node.js.";
  } else {
    replyText =
      "Thanks for messaging! You can ask about Shiful's skills or projects.";
  }

  // Twilio response
  twiml.message(replyText);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

const twilio = require("twilio");
const { MessagingResponse } = twilio.twiml;

// WhatsApp Webhook Route
app.post("/whatsapp", (req, res) => {
  const incomingMsg = req.body.Body.toLowerCase();
  const twiml = new MessagingResponse();

  let response =
    "That's interesting! Would you like to know about Shiful's skills or projects?";

  // Chatbot logic
  if (incomingMsg.includes("skill")) {
    response =
      "Shiful is a MERN Stack expert mastering React, Next.js, and Node.js.";
  } else if (incomingMsg.includes("project")) {
    response = "He has built premium apps like E-commerce and SaaS dashboards.";
  } else if (incomingMsg.includes("contact")) {
    response = "Email him at: shwapon.joti@gmail.com";
  }

  twiml.message(response);
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});
