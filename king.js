var message=function(teks){
var axios=require('axios')
axios.post("https://api.telegram.org/bot282766581:AAETig8RKAfbORcbILTZm_gtRG4kKjb2DE8/sendmessage",{
  chat_id:354492157,
  text:teks
})
.then(data=>{
  
})
.catch(err=>{
  console.log(err)
})
}
module.exports={telegram:message}
