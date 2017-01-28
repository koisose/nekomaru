module.exports=function(email2,email,io){
    var Horseman = require('node-horseman');
var horseman = new Horseman({phantomPath:"node_modules/phantomjs-prebuilt/bin/phantomjs"});
horseman
//.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36')
.open(email)
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("menuju email verifikasi ")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.click(".bluemix-login-link")
.wait(15000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("menekan link login")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#username",email2)
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan username")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(10000)
.screenshotBase64('PNG')
.then(function(data){
  console.log("menekan enter")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.type("#password","Pl0k0t0klucu-")
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan password")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(20000)
.screenshotBase64('PNG')
.then(function(data){
  console.log("menekan enter")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.type("#onboard__input-orgname",email.split("@")[0])
.wait(20000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("input organisasi")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#onboard__input-spacename","dev")
.wait(20000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("input spacename")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(10000)
.screenshotBase64('PNG')
.then(function(data){
  console.log("menekan enter")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.click(".onboard__suggestion--name")
.wait(15000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("menekan ready")
  io.emit("news",{hello:data})
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
}