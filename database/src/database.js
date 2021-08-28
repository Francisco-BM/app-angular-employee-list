const moogose=require('mongoose')

moogose
 .connect('mongodb://localhost/mean-employees',{
 useUnifiedTopology:true,
 useNewUrlParser:true,
 useFindAndModify:false

 })

 .then((db)=>console.log("Db is connected"))
 .catch((err)=>console.error(err));