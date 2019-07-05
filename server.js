const express=require("express")
require("express-async-errors")
const mongoose=require("mongoose")
const app =express()
const bodyParser=require("body-parser")
const morgan=require("morgan")



//Database connection
require("./mongo")
//Models
require("./model/Post")
require("./model/Comment")
require("./model/book")
require("./model/Users")
require("./model/Task")
app.use(bodyParser.json())
.use(morgan())
//app.use((req,res,next)=>{
// next();
// })

//Routes
app.use("/irshad",require("./routes/routes"));

/*
Not found Route
*/
// app.use(express.static('public'))
app.use("/public", express.static(path.join(__dirname, "..", "public")));
app.use((req,res,next)=>{
    req.status=404;
    const error=new Error("Routes not found");
    next(error);
});


/*
Error handler
*/

if (app.get("env") === "production") {
    app.use((error, req, res, next) => {
      res.status(req.status || 500).send({
        message: error.message
      });
    });
  }
  
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
      stack: error.stack
    });
  });


app.listen(process.env.PORT || 5000,()=>{
console.log("server is running on port 3001")
});
