const express = require("express");
const eApp = express();
const http = require("http");
const httpserver = http.createServer(eApp);
const { Server } = require("socket.io");
const io = new Server(httpserver);

eApp.use(
    express.static(__dirname + "/public")
);

eApp.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


io.on("connection", (socket) => {
    console.log("a connection has been made")
    socket.on("message", (msg) => {
        io.emit("message", msg);
        console.log(msg);
    });
});


httpserver.listen(80, () => {
    console.log("server started")
});