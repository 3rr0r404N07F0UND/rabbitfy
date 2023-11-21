const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
const option = {
  key: fs.readFileSync("../SSL/rabbitfy.pem"),
  cert: fs.readFileSync("../SSL/rabbitfy.cert"),
  passphrase: "404N07F0UND3rr0r",
};
app.get("/", (req, res) => {
  res.send("hi");
});
const server = https.createServer(option, app);
server.listen(4201, () => {
  console.log(4201);
});
