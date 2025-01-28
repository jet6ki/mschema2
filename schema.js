const mongoose = require("mongoose");

// Comment Schema
const CommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    commentedAt: { type: Date, default: Date.now },
});

// Blog Post Schema
const BlogPostSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true, minlength: 5 },
    content: { type: String, required: true, minlength: 50 },
    author: { type: String },
    tags: { type: [String], default: [] },
    category: { type: String, default: "General" },
    likes: { type: [String], default: [] },
    comments: { type: [CommentSchema], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;