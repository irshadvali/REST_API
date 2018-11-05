const express=require("express")
;
const mongoose=require("mongoose")
const app =express()
const bodyParser=require("body-parser")



//Database connection
require("./mongo")
//Models
require("./model/Post")
require("./model/author")
app.use(bodyParser.json())

const Post=mongoose.model("Post")
const Author=mongoose.model("Author")
app.get("/posts",async(req,res)=>{

    try {
        const posts= await Post.find({})
        res.send(posts) 
    } catch (error) {
        res.send(500)
    }


});
app.post("/posts", async(req,res)=>{
  //console.log(req.body)
  //res.send(req.body)
  try {
    const post =new Post()
    post.title=req.body.title;
    post.content=req.body.content;
   await post.save(post)  
   res.send(post)
  } catch (error) {
    res.send(500)
  }


})
app.get("/author",async(req,res)=>{

    try {
        const posts= await Author.find({})
        res.send(posts) 
    } catch (error) {
        res.send(500)
    }


})


app.listen(3001,()=>{
console.log("server is running on port 3001")
})
