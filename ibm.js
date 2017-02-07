module.exports=function(io,email){
  
  var faker=require('faker')
var Horseman = require('node-horseman');
var horseman = new Horseman({phantomPath:"node_modules/phantomjs-prebuilt/bin/phantomjs"});
horseman
//.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36')
.open('https://console.eu-gb.bluemix.net/')
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("membuka bluemix")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.click(".bx--btn.global-header__whitespace")
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("mengklik button sign up")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#email-input",email)
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan email "+email)
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
.type("#firstName-input",faker.name.firstName())
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan nama depan "+faker.name.firstName())
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#lastName-input",faker.name.lastName())
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan nama belakang "+faker.name.lastName())
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#company-input",faker.name.firstName()+faker.name.lastName())
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan perusahaan "+faker.name.firstName()+faker.name.lastName())
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#phoneNumber-input","12363170977")
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan nomer telepon 12363170977")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#password-input","Pl0k0t0klucu-")
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan password")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.type("#secondPassword-input","Pl0k0t0klucu-")
.wait(10000)
.screenshotBase64("PNG")//
.then(function(data){
  console.log("memasukkan password 2")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)//
})
.keyboardEvent('keypress',16777221)
.wait(10000)
.screenshotBase64('PNG')
.then(function(data){
  console.log("menekan enter dan menunggu email dari bluemix lanjut part 2")
  io.emit("news",{hello:data})
})
.catch(function(err){
  console.log(err)
})
.close()
}