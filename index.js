const express = require("express");
const app = express();
const server = require("http").createServer(app);

app.get("/", function(req, res) {
	res.send("Working... It has been updated!");
});

app.listen(process.env.PORT || 5000);