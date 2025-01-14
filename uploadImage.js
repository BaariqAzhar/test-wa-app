require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

async function uploadImage() {
  const data = new FormData();
  data.append("messaging_product", "whatsapp");
  data.append("file", fs.createReadStream(process.cwd() + "/logo.png"), {
    contentType: "image/png",
  });
  data.append("type", "image/png");

  const response = await axios({
    url: `${process.env.FB_URL}/media`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
    },
    data,
  });

  console.log(response.data);
}

uploadImage();
