
var app = require('express')();
var express=require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var session = require('express-session');
var bodyParser = require('body-parser');
var koneksi=require('./koneksi')
app.set('view engine', 'jade')
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + '/permen'));
app.use(session({secret: 'lakim', resave: true,
    saveUninitialized: true}));
app.use(bodyParser.json())
var port = process.env.VCAP_APP_PORT || 8080;
app.get("/", function (req,res) {
res.sendFile(__dirname+"/views/panda.html")
});

var ibm = require("./ibm");
var postmark=require('./postmark');
//var nheqminer=require('./nheq')();
 
 var facebook=require("./facebook")
 var tanggal=require('./sisatanggal')
 koneksi.cari("ibm",{},function(data){
console.log("mulai") 
    if(data.length<=100){
console.log(data.length)
         postmark.buatServer("skimpi"+data.length,"http://34.250.182.72:8080/postmark",function(res){
             facebook.postComments(JSON.stringify({email:res.InboundAddress,nama:"skimpi"+data.length,ID:res.ID,date:tanggal.tanggal}),panda=>{
             koneksi.simpan("ibm",{email:res.InboundAddress,nama:"skimpi"+data.length,ID:res.ID,date:tanggal.tanggal,facebook_id:panda.id})    
             })
             ibm(res.InboundAddress)
         })
     }
     else{
         facebook.postingSendiri("sudah 1 juta tanggal "+tanggal.tanggal)
     }
 }) 
app.post("/postmark",bodyParser.json(), function (req,res) {
    console.log("mulai part 2")
    res.status(200).send("bismillah")
    var cheerio=require('cheerio');
    var verifikasi=require('./verifyibm')
var $=cheerio.load(req.body.HtmlBody);
koneksi.cari("ibm",{},function(data){
verifikasi(data[data.length-1].email,$('a').eq(0).attr("href"))    
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
