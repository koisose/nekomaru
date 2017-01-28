module.exports=function(email,appname){
const spawn = require('child_process').spawn;
const ls = spawn('./cf', ['login','-a','https://api.eu-gb.bluemix.net','-u',email,'-p','Pl0k0t0klucu-']);

//fd4b8428f8ec8159ea1ed14f5f137f10@inbound.postmarkapp.com

//cf login [-a API_URL] [-u USERNAME] [-p PASSWORD] [-o ORG] [-s SPACE]
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
const ls = spawn('./cf', ['push',appname]);

//fd4b8428f8ec8159ea1ed14f5f137f10@inbound.postmarkapp.com

//cf login [-a API_URL] [-u USERNAME] [-p PASSWORD] [-o ORG] [-s SPACE]
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
}

