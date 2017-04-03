const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(process.env.PORT || 3000);
var countClient = 0;
var roomis = '';
io.on("connection", function (socket) {
    countClient++;
    console.log('Co Nguoi Ket noi:' + socket.id)

    socket.on('message', function (data) {
        console.log('Message from Client:' , data)
        // io.sockets.emit('messagerere', data)
        io.sockets.in(data.room).emit('messagerere', data);
    })
    socket.on('conn', function (data) {
        console.log('Message from Client:', data.room)
        // io.sockets.emit('message-re', data)
        socket.join(data.room);
        roomis = data.room;
    })
    socket.on('leaveRoom', function (data) {
        console.log('Client leave Room:', data)
        socket.leave(data);
    })
    
    socket.on("disconnect", function (socket) {
        countClient--;
        console.log('Disconnection')
    })

    socket.on("reconnection", function (socket) {
        console.log('Re-connection')
    })
    socket.on('error', function () {
        console.log('Error:');
        // socket.socket.reconnect();
    });
    console.log('client:' + countClient)
    // console.log('Total Number Client:' + count)
    // var srvSockets = io.sockets.sockets;

    // io.sockets.emit('numberclient', Object.keys(srvSockets).length)
    // console.log('socket.id:'+socket.id);
    // console.log('socket.rooms:'+socket.rooms);
    // console.log('socket.client:'+socket.client);
    // console.log('socket.conn:'+socket.conn);
    // console.log('count All',Object.keys(srvSockets).length);
});

