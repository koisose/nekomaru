var fs = require('fs');
var text2png = require('text2png');
var axios=require('axios');
var price={};
var dateFormat = require('dateformat');
var now = new Date();
var facebook=require("./facebook")

module.exports=function bismillah(){
axios.get("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=IBM")
.then((res)=>{
    price.ibm=res.data.Symbol+" : "+res.data.LastPrice+"$ / Change : "+res.data.Change+"\n";
getUp("https://api.bitfinex.com/v1/pubticker/zecusd",function(data){
    price.zec="ZEC :"+data.last_price+"$ / volume : "+data.volume+"\n";
    getUp("https://api.bitfinex.com/v1/pubticker/btcusd",function(data){
    price.btc="BTC :"+data.last_price+"$ / volume : "+data.volume+"\n";
    pandausd(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT\n")+price.ibm+price.zec+price.btc )
})
})    
})
.catch((err)=>{
    console.log(err)
});
}

function getUp(site,panda){
    axios.get(site)
.then((res)=>{
    panda(res.data);
    
})
.catch((err)=>{
    console.log(err)
});
}
function pandausd(isi,panda){
    fs.writeFileSync('public/out.png', text2png(isi,{bgColor: 'linen', lineSpacing: 10,
  padding: 20}))
facebook.postingGroup("http://pandamonium1.mybluemix.net/out.png","")
  
}