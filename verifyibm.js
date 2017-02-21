module.exports=panda
function panda(email2,email){

 var Nightmare = require('nightmare');
var nightmare = Nightmare({ show:true});
nightmare
//.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36')
.goto(email)
.wait(5000)
.click(".bluemix-login-link")
.wait(15000)
.type("#username",email2)
.wait(10000)
.click('#continuebutton')
.wait(10000)
.type("#password","Pl0k0t0klucu-")
.wait(10000)
.click('#signinbutton')
.wait(20000)
.click(".bx--checkbox__appearance")
.wait(5000)
.click(".button__termAccept")
.wait(20000)
.type("#onboard__input-orgname",email2.split("@")[0].toString())
.select(".onboard__region-select","eu-gb")
.wait(10000)
.click('.onboard__input-org-advance')
.wait(10000)
.type("#onboard__input-spacename","dev")
.wait(10000)
.click('.onboard__input-space-advance')
.wait(10000)
.click(".onboard__suggestion--name")
.wait(15000)
.end()
.then(function(data){
  console.log("menekan ready")
    var koneksi=require("./koneksi")
  var pushibm=require("./pushibm")
  var postmark=require("./postmark")
  koneksi.cari("ibm",{},function(data){
    pushibm(data[data.length-1].email,data[data.length-1].nama)
    postmark.deleteServer(data[data.length-1].ID)
  })
})
.catch(function(err){
var send =require("./king")
send.telegram("error verifyibm.js "+err)
  panda(email2,email)//
})

}
