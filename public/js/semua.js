function pencarianTabel(cari,field,panda){axios.get('/cari', {
    params: {
      cari: cari,
      field:field
    }
  })
  .then(function (response) {
    panda(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });}
  function deleteTabel(nama){
     axios.get("/deletekoleksi",
     {
         params:{
             koleksi:nama
         }
     })
     .then((res)=>{
         console.log(res.data)
     })
     .catch((err)=>{
         console.log(err)
     }) 
  }
  var app = angular.module('panda', []);
app.controller('preman', function($scope) {
   $scope.isiField=[]
   $scope.flame=''
    $scope.tabel=(cari,field)=>{
        $scope.flame=cari
        pencarianTabel(cari,field,(data)=>{
       
            $scope.isiField=data
            $scope.$apply()
        })
    }
    $scope.delete=(nama)=>{
       deleteTabel(nama)
      
       location.reload()    
       
       
    }
});