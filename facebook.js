var token="EAAYVUjZCPb2QBAMAEMSrNC2Ilqlxf4f9jrZBtDYRBUmzysPrdgMITWFwsPQwJIYmqszmZC6U6nRdYrrBcgjt1jAdtQq4Cufolvvwj3d4gtHJsgZABhRDU3ZCjCMbBigFZAI5ZBhj0SAuBN6jlSI3SVeMaNuFkVfCS0ZD"

var axios=require("axios")
//get feed
var getFeed=function(){
    axios.get('https://graph.facebook.com/v2.8/me/feed',{params:{
 access_token:token,
 limit:1000000,
}})
.then(function(data)
{
  console.log(data.data.data.length);
  
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
 var getGroup=function(){
     axios.get('https://graph.facebook.com/v2.8/me/groups',{params:{
 access_token:token,
 limit:1000000,
}})
.then(function(data)
{
  console.log(data.data);
  
}).catch((err)=>{
    console.log(err)
})   
 }
 //1233064896770552
 var getGroupFeeds=function(){
      axios.get('https://graph.facebook.com/v2.8/1233064896770552/feed',{params:{
 access_token:token,
 limit:5,
}})
.then(function(data)
{
  console.log(data.data);
  
}).catch((err)=>{
    console.log(err)
})   
 }
var postComments=function(message,panda){
     axios.post('https://graph.facebook.com/v2.8/1233064896770552_1233064900103885/comments',{
 access_token:token,
message:message,
 
})
.then(function(data)
{
  panda(data.data);
  
}).catch((err)=>{
    console.log(err)
})  
}
var getComments=function(panda){
      axios.get('https://graph.facebook.com/v2.8/1233064896770552_1233064900103885/comments',{params:{
 access_token:token,
 limit:5,
}})
.then(function(data)
{
  panda(data.data);
  
}).catch((err)=>{
    console.log(err)
})   
 }
 var deleteComment=function(id){
       axios.delete('https://graph.facebook.com/v2.8/'+id,{params:{
 access_token:token,

}})
.then(function(data)
{
console.log("berhasil mendelete")
  
}).catch((err)=>{
    console.log(err)
})  
 }
module.exports={postingGroup:postingGroup,
    postingSendiri:postingSendiri,
    editPosting:editPosting,
    getFeed:getFeed,
    getGroup:getGroup,
    getGroupFeeds:getGroupFeeds,
    getComments:getComments,
    postComments:postComments,
    deleteComment:deleteComment,
}

