"use strict";

var express = require("express");

var https = require("https");

var fs = require("fs");

var app = express();
var option = {
  key: fs.readFileSync("../SSL/rabbitfy.pem"),
  cert: fs.readFileSync("../SSL/rabbitfy.cert"),
  passphrase: "404N07F0UND3rr0r"
};
app.get("/", function (req, res) {
  res.send("hi");
});
var server = https.createServer(option, app);
server.listen(4201, function () {
  console.log(4201);
});