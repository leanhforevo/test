const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
// server.listen(3000);

// io.on("connection", (socket) => {
//     console.log('Co Nguoi Ket noi:' + socket.id)
//     socket.on('message', (data) => {
//         console.log('Message from Client:'+data)
//          io.sockets.emit('message-re', data)
//     })
// });
app.set('view engine','ejs');
app.set("views","./views");
app.listen(process.env.PORT || 3000);
app.get("/",(req,res)=>{
    res.render("home");
})