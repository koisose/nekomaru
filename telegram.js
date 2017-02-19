var botgram = require("botgram");
var bot = botgram("282766581:AAETig8RKAfbORcbILTZm_gtRG4kKjb2DE8");
var koneksi=require("./koneksi")

bot.command("ibm", function (msg, reply, next) {
 var Table = require('easy-table')



});
bot.command("sisatanggal", function (msg, reply, next) {
   
});

bot.text((msg,reply,next)=>{
  reply.keyboard();
    var natural = require('natural'),
    TfIdf = natural.TfIdf,
    tfidf = new TfIdf();
var commands=['hi','ibm','price',"tanggal"]
commands.map(function(x){
    tfidf.addDocument(x);
})
    var spellcheck = new natural.Spellcheck(commands);
    var tokenizer = new natural.WordTokenizer();
    var kata=tokenizer.tokenize(msg.text);
  var perbaikan=[]  
    kata.map(x=>{
        if(typeof spellcheck.getCorrections(x, 1)[0]!="undefined"){
          perbaikan.push(spellcheck.getCorrections(x, 1)[0])     
        }
        })

var sementara=[]
tfidf.tfidfs(perbaikan, function(i, measure) {
    sementara.push(measure);
});
var terbesar=sementara.reduce(function(a, b) {
    return Math.max(a, b);
})

if(terbesar>0){
   
    switch(commands[indexOfMax(sementara)]){
        case "hi":
            reply.text("hi "+msg.from.name)
            break;
            
      case "ibm":
          var facebook=require('./facebook')
facebook.getComments(data=>{
var panda= data.data.map(x=>{
        return x.message;
    })
     reply.text(JSON.stringify(panda))
})
          break;
     case "price":
          var price=require("./pricerate")
  price.pricerate(function(data){
    reply.text(data)
  })
  break;
  case "tanggal":
       var sisa=require('./sisatanggal')
  reply.text(sisa.tanggal)
  break;
    }
}
else{
  var keyboard1 = [ ];
         commands.map(x=>{
                keyboard1.push([x])
            })
            reply.keyboard(keyboard1, true,true).text("Pilih salah satu perintah di bawah ini?");
}
        
})
//mencari index angka terbesar
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}