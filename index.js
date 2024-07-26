const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const { Server } = require('socket.io');
const io = new Server(server)

app.use(express.static(path.resolve("./public")))

app.get("/" , (req,res)=>{
    res.sendFile("/public/index.html")
})

io.on("connection" , (socket)=>{
    socket.on("user-msg" , (message)=>{
        io.emit("user-msg" , message);
    })
})



server.listen(9000 , ()=>{
    console.log(`Server started at PORT 9000`)
})
