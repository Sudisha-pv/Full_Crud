 
 //1 load .env file
 require('dotenv').config()  // load .env file contents into process .env(include screte key and connection struing) by default.


//2 import express
const express= require('express')

//6 import cors
const cors=require('cors')

// 8 import  db
const db=require('./DB/connection')
//9 import router
const router = require('./Routes/router')


//3 create app using express
const Bserver=express()

//7 middleware configuration
Bserver.use(cors())
Bserver.use(express.json())
Bserver.use(router)

// 4 define port
const PORT = 3000 || process.env.PORT

//5app run
Bserver.listen(PORT,()=>{
  console.log("server start ar Port:",PORT);
  
})

Bserver.get('/',(req,res)=>{
  res.send("welcome to server")
})