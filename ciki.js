const spawn = require('child_process').spawn;
const ls = spawn('./cf', ['login','-a','https://api.ng.bluemix.net','-u','spiritbro56@yandex.com','-p','Pl0k0t0klucu-','-o','silipoinzagi','-s','silipoinzagi2']);



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




