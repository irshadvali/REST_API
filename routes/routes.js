const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");
const Book=mongoose.model("Book");
const Users=mongoose.model("Users")
const Task=mongoose.model("Task")

router.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

router.get("/posts/:postId", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.postId });
  res.send(post);
});

router.put("/:postId", async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    {
      _id: req.params.postId
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  res.send(post);
});

router.delete("/:postId", async (req, res) => {
  const post = await Post.findByIdAndRemove({
    _id: req.params.postId
  });
  res.send(post);
});

router.post("/", async (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.send(post);
});

// /Comments

// Create a Comment
router.post("/:postId/comment", async (req, res) => {
  //Find a POst
  const post = await Post.findOne({ _id: req.params.postId });

  //Create a Comment
  const comment = new Comment();
  comment.content = req.body.content;
  comment.post = post._id;
  await comment.save();

  // Associate Post with comment
  post.comments.push(comment._id);
  await post.save();

  res.send(comment);
});

//Read a Comment
router.get("/:postId/comment", async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postId }).populate(
      "comments"
    );
    res.send(post);
  });
  
  //Edit a Comment
  router.put("/comment/:commentId", async (req, res) => {
    const comment = await Comment.findOneAndUpdate(
      {
        _id: req.params.commentId
      },
      req.body,
      { new: true, runValidators: true }
    );
  
    res.send(comment);
  });
  
  router.delete("/comment/:commentId", async (req, res) => {
    await Comment.findByIdAndRemove(req.params.commentId);
    res.send({ message: "Comment Successfully Deleted" });
  });
  router.get("/book", async (req, res) => {
    const book = await Book.find({})
    res.send(book);
  });
  router.get("/comments", async (req, res) => {
    const comments = await Comment.find({})
    res.send(comments);
  });

  router.post("/user", async (req, res) => {
    const user = new Users();
    user.name = req.body.name;
    user.mobileNumber = req.body.mobileNumber;
    user.email = req.body.email;
    user.adhaar = req.body.adhaar;
    await user.save();
    res.send(user);
  });

  router.put("/user/:userId", async (req, res) => {
    const user = await Users.findOneAndUpdate(
      {
        _id: req.params.userId
      },
      req.body,
      { new: true, runValidators: true }
    ); 
    res.send(user);
  });

  router.get("/users", async (req, res) => {
    const users = await Users.find({})
    res.send(users);
  });

  router.post("/task", async (req, res) => {
    const task = new Task();
    task.name = req.body.name;
    task.description = req.body.description;
    task.location = req.body.location;
    task.userId = req.body.userId;
    await task.save();
    res.send(task);
  });
  router.get("/tasks", async (req, res) => {
    const tasks = await Task.find({})
    res.send(tasks);
  });

  router.put("/task/:taskId", async (req, res) => {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.taskId
      },
      req.body,
      { new: true, runValidators: true }
    ); 
    res.send(task);
  });
  router.get("/task/:taskId", async (req, res) => {
    const task = await Task.findOne({ _id: req.params.taskId });
    res.send(task);
  });
module.exports = router;