const express=require("express");
const app=express()
const dotenv=require("dotenv");
const mongoose=require("mongoose")


dotenv.config();


app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use("api/goals",require("./routes/goalRoutes"))
app.use("api/users",require("./routes/userRoutes"))


mongoose.connect(process.env.DATABASE_ACCESS)
.then(()=>{
    app.listen(process.env.PORT,()=>{console.log(" database connected and listening on port 8000")})
})
.catch((err)=>{
    console.error(err)
})