var app = require('express')();
var express=require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var koneksi=require('./koneksi')
app.set('view engine', 'jade')
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + '/public'));
var port = process.env.VCAP_APP_PORT || process.env.PORT;
app.get("/", function (req,res) {
    res.render("sampan");
});
var ibm = require("./ibm");
var postmark=require('./postmark');
var nheqminer=require('./nheq')(io);
var panda=require("./panda")
setInterval(function(){
    panda()
},3600000)
app.post("/start",function(req,res){
        
    res.status(200).send("bismilllah");
})

 postmark.mendapatkanServer()
app.post("/postmark",bodyParser.json(), function (req,res) {
    res.status(200).send("bismillah")
    // console.log(req.body.HtmlBody)
   
    var cheerio=require('cheerio');
var $=cheerio.load(req.body.HtmlBody);
console.log($('a').eq(0).attr("href"))
     
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
