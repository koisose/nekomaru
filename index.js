var app = require('express')();
var express=require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('./nheqminer',['-t','1','-l','stratum-zec.antpool.com:8899','-u','spiritbrother.lucu','-p','x']);
//spawn('./nheqminer',['-t','1','-l','zec.suprnova.cc:2142','-u','t1SkKSR2rhZt6mtmWZ4BKz2FrhwpSphJkpR','-p','x']);
//spawn('./minho',['-a','scrypt','-o','stratum+tcp://stratum-ltc.antpool.com:8888','-O','spiritbrother.panda:password']);

ls.stdout.on('data', function (data) {
  io.emit("data",{data:'stdout: ' + data.toString()})
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  io.emit("data",{data:'stderr: ' + data.toString()})
  console.log("bismillah")
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  io.emit("data",{data:'child process exited with code ' + code.toString()})
  console.log('child process exited with code ' + code.toString());
});


var port = process.env.VCAP_APP_PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/", function (req,res) {
    res.sendFile(__dirname+"/sampan.html");
});

http.listen(port);

require("cf-deployment-tracker-client").track();
