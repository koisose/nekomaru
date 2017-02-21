module.exports=function(email,appname){
const spawn = require('child_process').spawn;
const ls = spawn('./cf', ['login','-a','https://api.eu-gb.bluemix.net','-u',email,'-p','Pl0k0t0klucu-']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
push(appname)
  
});
}

function push(appname){
  const spawn = require('child_process').spawn;
const ls = spawn('./cf', ['push',appname,'-m','2GB']);

//fd4b8428f8ec8159ea1ed14f5f137f10@inbound.postmarkapp.com

//cf login [-a API_URL] [-u USERNAME] [-p PASSWORD] [-o ORG] [-s SPACE]
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
var ibm=require('./ibm')
var koneksi=require('./koneksi')
var postmark=require('./postmark');
var facebook=require("./facebook")
 var tanggal=require('./sisatanggal')
// koneksi.cari("ibm",{},function(data){
//console.log("mulai") 
  //  if(data.length<=1000000){
    //     postmark.buatServer("skimpi"+data.length,"http://ec2-34-248-248-17.eu-west-1.compute.amazonaws.com:3000/postmark",function(res){
      //       facebook.postComments(JSON.stringify({email:res.InboundAddress,nama:"skimpi"+data.length,ID:res.ID,date:tanggal.tanggal}),panda=>{
        //     koneksi.simpan("ibm",{email:res.InboundAddress,nama:"skimpi"+data.length,ID:res.ID,date:tanggal.tanggal,facebook_id:panda.id})    
          //   })
            // ibm(res.InboundAddress)
        // })
    // }
    // else{
      //   facebook.postingSendiri("sudah 1 juta tanggal "+tanggal.tanggal)
     //}
 //}) 
  console.log(`child process exited with code ${code}`);
});
}

