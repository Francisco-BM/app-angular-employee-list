const express=require('express')
const morgan=require ('morgan')
const cors=require('cors')
// cors se utiliza para aceptar peticiones de otro servidor

const app=express()
 //eviormen variables
app.set('port',process.env.PORT||4000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//rutas de la carpeta router 
app.use("/api/employees", require('./routes/employees.routes'))

module.exports=app;
