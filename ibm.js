module.exports=function(email){

  var faker=require('faker')
// var Horseman = require('node-horseman');
// var horseman = new Horseman({phantomPath:"node_modules/phantomjs-prebuilt/bin/phantomjs"});
 var Nightmare = require('nightmare');
var nightmare = Nightmare({show:true});
nightmare
//.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36')
.goto('https://console.eu-gb.bluemix.net/')
.wait(5000)
.click(".bx--btn.global-header__whitespace")
.wait(5000)//
.type("#email-input",email)
.wait(5000)
.type('body', '\n')
.wait(5000)
.type("#firstName-input",faker.name.firstName())
.wait(5000)
.type("#lastName-input",faker.name.lastName())
.wait(5000)
.type("#company-input",faker.name.firstName()+faker.name.lastName())
.wait(5000)
.type("#phoneNumber-input","12363170977")
.wait(5000)
.type("#password-input","Pl0k0t0klucu-")
.wait(5000)
.type("#secondPassword-input","Pl0k0t0klucu-")
.wait(5000)
.click("#register-user")
.wait(20000)
.end()
.then(data=>{
  console.log("tunggu email lanjut part 2")
})
.catch(err=>{
var send=require('./king')
send.telegram("error ibm.js "+err)
console.log("error")
  console.log(err)
})
}

