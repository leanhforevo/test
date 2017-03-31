const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(3000);

io.on("connection", (socket) => {
    console.log('Co Nguoi Ket noi:' + socket.id)
    socket.on('message', (data) => {
        console.log('Message from Client:'+data)
         io.sockets.emit('message-re', data)
    })
});