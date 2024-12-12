const { BlogRouter, BlogModel } = require("../Model/Blog.model");
// const { findanddelete } = require("./User.controller");
// ;
const addBlog = async (req, res) => {
  try {
    console.log("body", req.body);
    const { title, category, postContent } = req.body;
    const blog = new BlogModel({ title,category , postContent });
    console.log(blog);
    
    await blog.save();
    return res.status(201).json({ message: "Blog Record created" });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "server error" });
  }
};

const findBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    console.log(blogId);
    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog found", data: blog });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
const findandupdate = async (req, res) => {
  try {
    const newtitle = req.body.newtitle;
    console.log(newtitle);
    const newcategory=req.body.newcategory;
    console.log(newcategory);
    
    const blogId = req.params.id;
  
    console.log(blogId);
    const newData = await BlogModel.findByIdAndUpdate(
      blogId,
      { title: newtitle, category: newcategory },
      { new: true }
    );
    console.log(newData);
    if (!newData) {
      return res.status(404).json({ message: "Blog not found" });
    } else {
      return res.status(200).json({ message: "title updated", data: newData });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
module.exports = { addBlog, findBlog, findandupdate };
