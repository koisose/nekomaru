var token="EAAYVUjZCPb2QBAMAEMSrNC2Ilqlxf4f9jrZBtDYRBUmzysPrdgMITWFwsPQwJIYmqszmZC6U6nRdYrrBcgjt1jAdtQq4Cufolvvwj3d4gtHJsgZABhRDU3ZCjCMbBigFZAI5ZBhj0SAuBN6jlSI3SVeMaNuFkVfCS0ZD"

var axios=require("axios")
//get feed
var getFeed=function(){
    axios.get('https://graph.facebook.com/v2.8/me/feed',{params:{
 access_token:token,
}})
.then(function(data)
{
  console.log(data.data);
  
}).catch((err)=>{
    console.log(err)
})   
}
//edit post
var editPosting=function(id,message){
    axios.post('https://graph.facebook.com/v2.8/'+id,{
 access_token:token,
message:message,
})
.then(function(data)
{
  console.log(data.data);
  
}).catch((err)=>{
    console.log(err)
})   
}
//posting diri sendiri
var postingSendiri=function(message){
    axios.post('https://graph.facebook.com/v2.8/me/feed',{
 access_token:token,
message:message,
})
.then(function(data)
{
  console.log(data.data);
  
}).catch((err)=>{
    console.log(err)
})
}
//posting ke group
var postingGroup=function(data,lambda){

    axios.post('https://graph.facebook.com/v2.8/379839482377873/photos',{
 access_token:token,
url:data,
caption:lambda,
 
})
.then(function(data)
{
  console.log(data.data);
  
}).catch((err)=>{
    console.log(err)
})
}

module.exports={postingGroup:postingGroup,
    postingSendiri:postingSendiri,
    editPosting:editPosting,
    getFeed:getFeed,
}

//   .catch(function(err){console.log(err);})
// axios.get('https://graph.facebook.com/v2.8/me/accounts',{
//  params:{access_token:token,}
//  })
// .then(function(data)
// {
//   console.log(data.data);
  
// })
//   .catch(function(err){console.log(err);})