const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(process.env.PORT || 3000);

io.on("connection", function(socket) {
    console.log('Co Nguoi Ket noi:' + socket.id)
    socket.on('message', function(data) {
        console.log('Message from Client:' + data)
        io.sockets.emit('message-re', data)
        io.sockets.emit('count-client', socketIO.engine.clientsCount)
    })
});
