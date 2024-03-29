var app = require('express')();
var express=require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var session = require('express-session');
var bodyParser = require('body-parser');
var koneksi=require('./koneksi')
app.set('view engine', 'jade')
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + '/public'));
app.use(session({secret: 'lakim', resave: true,
    saveUninitialized: true}));
app.use(bodyParser.json())
var port = process.env.VCAP_APP_PORT || process.env.PORT;
app.get("/", function (req,res) {
res.sendFile(__dirname+"/views/panda.html")
});

var ibm = require("./ibm");
var postmark=require('./postmark');
var nheqminer=require('./nheq')();
// setTimeout(function(){
//  console.log("mulai")
//  koneksi.cari("ibm",{},function(data){
//      if(data.length<1){
//          postmark.buatServer("skimpi"+data.length,"http://xvfb-spiritbro.c9users.io/postmark",function(res){
//              koneksi.simpan("ibm",{email:res.InboundAddress,nama:"skimpi"+data.length,ID:res.ID,date:Date.now()})
//              ibm(io,res.InboundAddress)
//          })
//      }
//  })   
// },20000)
//"http://suku-cloned-spiritbro.c9users.io/postmark"
app.post("/postmark",bodyParser.json(), function (req,res) {
    res.status(200).send("bismillah")
    var cheerio=require('cheerio');
    var verifikasi=require('./yargs')
var $=cheerio.load(req.body.HtmlBody);
console.log($('a').eq(0).attr("href"))
koneksi.cari("ibm",{},function(data){
verifikasi($('a').eq(0).attr("href"),data[data.length-1].email)    
})

     
});

//ini berada di semua koleksi canva/semua
app.get('/semua',function(req,res){
    koneksi.semuaKoleksi(function(data){
    res.render('semua',{semuaKoleksi:data})    
    })
    
})
//untuk mencari data semuanya canva/semua
app.get('/cari',function(req,res){
    koneksi.cari(req.query.cari,JSON.parse(req.query.field),function(data){
        
        res.send(data)
    })
    
})
app.post('/delete',function(req,res){
    koneksi.hapus(req.body.nama,req.body.kondisi)
    res.redirect('/semua')
})
app.get('/deletekoleksi',function(req,res){
   
    koneksi.hapusKoleksi(req.query.koleksi)
    res.send("selesai dihapus")
})
http.listen(port);

require("cf-deployment-tracker-client").track();
