require("dotenv").config();
const axios = require("axios");

async function sendTextMessage() {
  const response = await axios({
    url: `${process.env.FB_URL}/messages`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      messaging_product: "whatsapp",
      to: process.env.TO,
      type: "text",
      text: {
        body: "Hi again (2)",
      },
    }),
  });

  console.log(response.data);
}

sendTextMessage();
