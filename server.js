var express = require('express');
var app = express();
var SerialPort  = require("serialport").SerialPort;
var portName = "/dev/ttyACM0";



app.get('/hello', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

var io = require("socket.io").listen(app);

var sp = new SerialPort(portName, {
	baudrate: 9600
});

sp.on("close", function (err) {
  console.log("port closed");
});

sp.on("error", function (err) {
  console.error("error", err);
});

sp.on("open", function () {
  console.log("port opened... Press reset on the Arduino.");// Not sure if we need to reset it. tests will show
});


io.sockets.on("connection", function (socket) {
    // If socket.io receives message from the client browser then 
    // this call back will be executed.
    socket.on("message", function (msg) {
        console.log(msg);
    });
    // If a web browser disconnects from Socket.IO then this callback is called.
    socket.on("disconnect", function () {
        console.log("disconnected");
    });
});

