const express=require("express");
const app=express()
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const port=process.env.PORT 

dotenv.config();
 
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database is connected"))
app.listen(port,()=>console.log(`Server started on port ${port}`))
