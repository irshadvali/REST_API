const router=require("express").Router();
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const morgan=require("morgan")
const Post=mongoose.model("Post")
const Author=mongoose.model("Author")

router.get("/",async(req,res)=>{
        const posts= await Post.find({})
        res.send(posts) ;

});
router.post("/", async(req,res)=>{
    const post =new Post()
    post.title=req.body.title;
    post.content=req.body.content;
   await post.save(post);
   res.send(post);
  
});
router.get("/:postId",async(req,res)=>{
        const post =await Post.find({
            _id:req.params.postId
        })
        res.send(post)
});

router.put("/:postId",async(req,res)=>{
        const post =await Post.findByIdAndUpdate({
            _id:req.params.postId
        },req.body,{
            new:true,
            runValidators:true
        });
        res.send(post)
});

router.delete("/:postId",async(req,res)=>{
        const post =await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post)       
});


router.get("/author",async(req,res)=>{
        const posts= await Author.find({})
        res.send(posts) 

})


module.exports=router