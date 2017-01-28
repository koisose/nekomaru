var axios=require('axios')
 var fs = require('fs');
var Twit = require('twit')


var T = new Twit({
  consumer_key:         'jX6dvSamQUvlmveZWvfNVVKrz',
  consumer_secret:      'To8qdjHBcHffxzzpXOsnntkqe5IujrrpPMwE99eNtVL69d4rkq',
  access_token:         '806841629541736448-skKVGo45OnLqRJDglQPKE88TukbqJkX',
  access_token_secret:  'Mw6JQPbGkhriNzJRdV2HwttPer5YNnsn1BP8ygh7Ieidh',
 
})
var http = require('http');
var fs = require('fs');


// var panda="https://drscdn.500px.org/photo/77697461/q%3D50_w%3D140_h%3D140/4418ae4dd4a91f3d14bea20ca9bb2eb3?v=0".replace("https","http")
// console.log(panda)
 function genRand() {
      return Math.floor(Math.random()*20);
   }

axios.get("https://api.500px.com/v1/photos/search?term=green&exclude=People",{
params:{
  consumer_key:"Y6h9BMayevJE550eU4Hc6MLpKcgPyElvVBSWa4bo"
}
})
.then(function(res){
  var file = fs.createWriteStream("public/file.jpg");
var request = http.get(res.data.photos[genRand()].image_url.replace("https","http"), function(response) {
  response.pipe(file);
});
request.on("close",function(){
  var b64content = fs.readFileSync('public/file.jpg', { encoding: 'base64' });
  T.post('account/update_profile_image',{image:b64content}, function (err, data, response) {
  console.log(data)
  })
  
})
  })
.catch(function(err){
  console.log(err)
})
var b64content = fs.readFileSync('public/out.png', { encoding: 'base64' })
// first we must post the media to Twitter 
module.exports=function(isi){T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  
  var mediaIdStr = data.media_id_string
  var altText = "STOCK"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
   
      var params = { status:isi, media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})}