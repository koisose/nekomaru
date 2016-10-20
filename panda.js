var Horseman = require('node-horseman');
var horseman = new Horseman({phantomPath:"node_modules/phantomjs-prebuilt/bin/phantomjs",
    injectJquery:true
});
var express=require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false } );
app.use(express.static('public'));

app.get('/', function(req, res) {
horseman
    .open('https://www.instagram.com')
    .screenshot("public/panda.png")
  .wait(5000)
  .type('input[name="username"]', 'pekalonganpanda')
  .type('input[name="fullName"]', 'pekalongan lucu')
   .type('input[name="email"]', 'Funition@rhyta.com')
  .type('input[name="password"]', 'plokotoklucu')
   .wait(5000)
   .evaluate( function(selector){
     $(selector).eq(1).click()
         }, 'button')
   .wait(10000)
     .screenshot("public/big.png")
  .then(function(){
       res.render('index',{image:"big.png"});
  })
  .catch(function(err){
      res.render('index',{image:"panda.png"});
      console.log(err)
  })
  
						  
});
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    //console.log(data);
  });
});
server.listen(process.env.PORT);
console.log('listening on port '+process.env.PORT);
