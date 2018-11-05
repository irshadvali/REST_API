const express=require("express")
const app =express();

app.get("/posts",(req,res)=>{
res.send({
    name:"irshad"
})
})

app.listen(3001,()=>{
console.log("server is running on port 3001")
})
