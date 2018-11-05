
const mongoose = require("mongoose");
const Schema=mongoose.Schema
const post_schema = new Schema({
    title: {
        type: String,
        required: "Title is required."
    },
    content: {
        type: String,
        required:  "Content is required."
    }
},{
    timestamps:true
})


module.exports = mongoose.model("Post", post_schema)