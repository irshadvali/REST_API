const express=require("express")
;
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
  try {
    const post =new Post()
    post.title=req.body.title;
    post.content=req.body.content;
   await post.save(post)  
   res.send(post)
  } catch (error) {
    res.send(500)
  }


});
app.get("/posts/:postId",async(req,res)=>{
    try {

        const post =await Post.find({
            _id:req.params.postId
        })
        res.send(post)
        
    } catch (error) {
        res.send(500)  
    }

});

app.put("/posts/:postId",async(req,res)=>{
    try {

        const post =await Post.findByIdAndUpdate({
            _id:req.params.postId
        },req.body,{
            new:true,
            runValidators:true
        });
        res.send(post)
        
    } catch (error) {
        res.send(500)  
    }

});

app.delete("/posts/:postId",async(req,res)=>{
    try {

        const post =await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post)
        
    } catch (error) {
        res.send(500)  
    }

});


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
