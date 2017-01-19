var token="EAAYVUjZCPb2QBAMAEMSrNC2Ilqlxf4f9jrZBtDYRBUmzysPrdgMITWFwsPQwJIYmqszmZC6U6nRdYrrBcgjt1jAdtQq4Cufolvvwj3d4gtHJsgZABhRDU3ZCjCMbBigFZAI5ZBhj0SAuBN6jlSI3SVeMaNuFkVfCS0ZD"
var tokenpage="EAAYVUjZCPb2QBANWh304wZAxyvRaWhMMUZBZBM2bC7ye5ZAKLBJARZBdberN6bIYpvXNPWDnl6F3dVXlgANzqrHvaknlYwUqjixa7USUzTRVtHge5aBewiGozfc2BvakmtjJdDGgdlu0iG7zMhKufS8m9EGOpGg1UZD";
var axios=require("axios")
//untuk mendapatkan search query

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

module.exports={postingGroup:postingGroup,}

//   .catch(function(err){console.log(err);})
// axios.get('https://graph.facebook.com/v2.8/me/accounts',{
//  params:{access_token:token,}
//  })
// .then(function(data)
// {
//   console.log(data.data);
  
// })
//   .catch(function(err){console.log(err);})