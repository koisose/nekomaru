var argv = require('yargs').argv;

    var Horseman = require('node-horseman');
var horseman2 = new Horseman();
horseman2
//.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36')
.open(argv.email)
.wait(20000)
.screenshot("zero/life.png")//
.then(function(data){
  console.log("menuju email verifikasi ")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.click(".bluemix-login-link")
.wait(15000)
.screenshot("zero/life1.png")//
.then(function(data){
  console.log("menekan link login")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#username",argv.email2)
.wait(10000)
.screenshot("zero/life2.png")//
.then(function(data){
  console.log("memasukkan username")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(10000)
.screenshot("zero/life3.png")
.then(function(data){
  console.log("menekan enter")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.type("#password","Pl0k0t0klucu-")
.wait(10000)
.screenshot("zero/life4.png")//
.then(function(data){
  console.log("memasukkan password")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(40000)
.screenshot("zero/life5.png")
.then(function(data){
  console.log("menekan enter")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.click(".bx--checkbox__appearance")
.wait(20000)
.screenshot("zero/klikagree.png")//
.then(function(data){
  console.log("klik agree ")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.click(".onboard__confirm--button")
.wait(20000)
.screenshot("zero/clickcontinue.png")//
.then(function(data){
  console.log("klik continue ")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#onboard__input-orgname",argv.email2)
.wait(30000)
.screenshot("zero/life6.png")//
.then(function(data){
  console.log("input organisasi")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(30000)
.screenshot("zero/life7.png")
.then(function(data){
  console.log("menekan enter")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.type("#onboard__input-spacename","dev")
.wait(30000)
.screenshot("zero/life8.png")//
.then(function(data){
  console.log("input spacename")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(30000)
.screenshot("zero/life9.png")
.then(function(data){
  console.log("menekan enter")
  //io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.click(".onboard__suggestion--name")
.wait(15000)
.screenshot("zero/life10.png")//
.then(function(data){
  console.log("menekan ready")
  //io.emit("news",{hello:data})
  var koneksi=require("./koneksi")
  var pushibm=require("./pushibm")
  var postmark=require("./postmark")
  koneksi.cari("ibm",{},function(data){
    pushibm(data[data.length-1].email,data[data.length-1].nama)
    postmark.deleteServer(data[data.length-1].ID)
  })
})
.catch(function(err){
  console.log(err)//
})
.close()