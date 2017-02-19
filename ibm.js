module.exports=function(email){
  
  var faker=require('faker')
// var Horseman = require('node-horseman');
// var horseman = new Horseman({phantomPath:"node_modules/phantomjs-prebuilt/bin/phantomjs"});
 var Nightmare = require('nightmare');       
var nightmare = Nightmare();
nightmare
//.userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36')
.goto('https://console.eu-gb.bluemix.net/')
.wait(5000)
.screenshot("lakim/panda.png")//
.click(".bx--btn.global-header__whitespace")
.wait(10000)
.screenshot("lakim/panda1.png")//
.type("#email-input",email)
.wait(10000)
.screenshot("lakim/panda2.png")//
.type('body', '000d')
.wait(10000)
.screenshot('lakim/panda3.png')
.type("#firstName-input",faker.name.firstName())
.wait(10000)
.screenshot("PNG")//
.type("#lastName-input",faker.name.lastName())
.wait(10000)
.screenshot("PNG")//
.type("#company-input",faker.name.firstName()+faker.name.lastName())
.wait(10000)
.screenshot("PNG")//
.type("#phoneNumber-input","12363170977")
.wait(10000)
.screenshot("PNG")//
.type("#password-input","Pl0k0t0klucu-")
.wait(10000)
.screenshot("PNG")//
.type("#secondPassword-input","Pl0k0t0klucu-")
.wait(10000)
.screenshot("lakim/panda4.png")//
.type('body', '000d')
.wait(10000)
.screenshot('lakim/panda5.png')
.end()
}