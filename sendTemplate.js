require("dotenv").config();
const axios = require("axios");

async function sendTemplateMessage() {
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
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    }),
  });

  console.log(response.data);
}

sendTemplateMessage();
