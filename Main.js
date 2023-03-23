const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const clusterURL = "mongodb+srv://ch75:9875@cluster0.5doksds.mongodb.net/WebStore"

let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);

app.use(cors());
app.use(express.json());

//Connect Database
mongoose.connect(clusterURL)

//API paths
app.use("/", require("./Routings/UserData_Route"));
app.use("/", require("./Routings/ConsultData_Route"));
app.use("/", require("./Routings/MsgData_Route"));

//Live Chat 
io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        io.in(data.room).emit('new message', {user: data.user, message: data.message});
    });
});


//Testing Back-End
app.listen(8000, function() {
    console.log("ok running")
})