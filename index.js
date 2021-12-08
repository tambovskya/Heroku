const express = require("express");
const socket = require("socket.io");

const PORT = 5000;
const app = express();

const server = app.listen(PORT, function() {
	console.log("Hello Good Friend!");
});

const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
});