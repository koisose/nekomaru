var koneksi=require('./koneksi')
,postmark=require('./postmark')
postmark.mendapatkanServer()
koneksi.cari("ibm",{},data=>{
  console.log(data)
  postmark.deleteServer(data[0].ID)
  koneksi.hapus("ibm",data[0]._id)
})
// var Horseman = require('node-horseman');
// var horseman = new Horseman({phantomPath:"node_modules/phantomjs-prebuilt/bin/phantomjs"});

// horseman
//   .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
//   .open('http://www.google.com')
//   .type('input[name="q"]', 'github')
//   .click('[name="btnK"]')
//   .keyboardEvent('keypress', 16777221)
//   .waitForSelector('div.g')
//   .count('div.g')
//   .log() // prints out the number of results
//   .close();