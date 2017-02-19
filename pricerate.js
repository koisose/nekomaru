var axios=require('axios');
var price={};
var dateFormat = require('dateformat');
var now = new Date();

var pricerate=function(sampan){
axios.get("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=IBM")
.then((res)=>{
    price.ibm=res.data.Symbol+" : "+res.data.LastPrice+"$ / Change : "+res.data.Change+"\n";
getUp("https://api.bitfinex.com/v1/pubticker/zecusd",function(data){
    price.zec="ZEC :"+data.last_price+"$ / volume : "+data.volume+"\n";
    getUp("https://api.bitfinex.com/v1/pubticker/btcusd",function(data){
    price.btc="BTC :"+data.last_price+"$ / volume : "+data.volume+"\n";
  sampan(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT\n")+price.ibm+price.zec+price.btc);   
})
})    
})
.catch((err)=>{
    console.log(err)
});
};


function getUp(site,panda){
    axios.get(site)
.then((res)=>{
    panda(res.data);
    
})
.catch((err)=>{
    console.log(err)
});
}
module.exports={
    pricerate:pricerate,
}