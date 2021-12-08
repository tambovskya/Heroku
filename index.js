const express = require("express");
const app = express();

app.get("/", function(req, res) {
	rese.send("Working!");
});

app.listen(process.env.PORT || 5000);