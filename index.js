var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

connections = [];

server.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('ok');
});
