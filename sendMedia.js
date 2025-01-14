require("dotenv").config();
const axios = require("axios");

async function sendMediaMessage() {
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
      type: "image",
      image: {
        // link: "https://dummyimage.com/600x400/000/fff.png&text=TEST+WA+V3+image",
        id: "1407549013555177",
        caption: "This is a media message",
      },
    }),
  });

  console.log(response.data);
}

sendMediaMessage();
