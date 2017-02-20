var koneksi=require('./koneksi')
,postmark=require('./postmark')
postmark.mendapatkanServer()
koneksi.cari("ibm",{},data=>{
  console.log(data)
  postmark.deleteServer(data[0].ID)
  koneksi.hapus("ibm",data[0]._id)
})
