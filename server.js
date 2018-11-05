const express=require("express")

const mongoose=require("mongoose")
const app =express()
const bodyParser=require("body-parser")
const morgan=require("morgan")



//Database connection
require("./mongo")
//Models
require("./model/Post")
require("./model/author")
app.use(bodyParser.json())
.use(morgan())

//Routes
app.use("/posts",require("./routes/routes"))




app.listen(3001,()=>{
console.log("server is running on port 3001")
})
