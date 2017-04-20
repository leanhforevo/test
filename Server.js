const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(process.env.PORT || 3000);

app.get('/', function (req, res) {
   
    res.end('You Must add page in end of url!!');
})

