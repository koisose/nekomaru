var url = 'mongodb://panda:123456@gcp-us-east1-cpu.1.dblayer.com:15445,gcp-us-east1-cpu.0.dblayer.com:15445/ibm?ssl=true';
var collections = []
var mongojs=require("mongojs")
var db = mongojs(url,collections);
var pencarian=function(nama,koleksi,fungsi){
db.collection(nama).find(koleksi, function(err, users) {
if(typeof(users)!= "undefined" && users.length>0){
  fungsi(users)
}else{
  
  fungsi([])
}
}) 
}


var simpan=function(nama,koleksi){
 db.collection(nama).save(koleksi, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");

   
 }); 
}
// simpan("user",{nama:"cebum",user:"panda"})

var update=function(nama,kondisi,berubah){
  db.collection(nama).update(kondisi, {$set: berubah}, {multi: true}, function (data) {
    console.log("saved")
    
})
}
var hapus=function(nama,kondisi){
db.collection(nama).remove({_id:db.ObjectId(kondisi)}, {}, function(data,panda){
  if(!data){
    console.log("sukses menghapus")
  }else{
    console.log("error: "+panda)
  }
// pencarian(nama,{},(data)=>{
//   console.log(data)
// })
  
})
  }
var hapusKoleksi=function(nama){
 
  db.collection(nama).drop(function(data){
    console.log(data)
  })
}  


var semuaKoleksi=function(panda){db.getCollectionNames(function(err, colNames) {
if (err) return console.log(err);
panda(colNames)
});}
module.exports={
  cari:pencarian,
  simpan:simpan,
  update:update,
  hapus:hapus,
  semuaKoleksi:semuaKoleksi,
  hapusKoleksi:hapusKoleksi
}