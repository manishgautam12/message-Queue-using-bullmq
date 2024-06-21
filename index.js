import express from 'express'

const app=express();

app.get("/",async(req,res)=>{
 res.send("This is test api")
})


app.listen(8080,()=>{
    console.log("server is running on port 8080");
})