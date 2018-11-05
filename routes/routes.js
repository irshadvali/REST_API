const router=require("express").Router();
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const morgan=require("morgan")
const Post=mongoose.model("Post")
const Author=mongoose.model("Author")

router.get("/",async(req,res)=>{

    try {
        const posts= await Post.find({})
        res.send(posts) 
    } catch (error) {
        res.send(500)
    }


});
router.post("/", async(req,res)=>{
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
router.get("/:postId",async(req,res)=>{
    try {

        const post =await Post.find({
            _id:req.params.postId
        })
        res.send(post)
        
    } catch (error) {
        res.send(500)  
    }

});

router.put("/:postId",async(req,res)=>{
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

router.delete("/:postId",async(req,res)=>{
    try {

        const post =await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post)
        
    } catch (error) {
        res.send(500)  
    }

});


router.get("/author",async(req,res)=>{

    try {
        const posts= await Author.find({})
        res.send(posts) 
    } catch (error) {
        res.send(500)
    }


})


module.exports=router