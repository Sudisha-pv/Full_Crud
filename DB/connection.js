//1 import mongoose
const mongoose=require('mongoose')
//2 get conncetionString
const connectionString = process.env.connectionString

//3 define connection
mongoose.connect(connectionString).then(res=>{
  console.log("server connected with mongoDb");
  
}).catch(err=>{
  console.log("error",+err);
  
})
