const express=require("express")
const BlogRouter=express.Router();
const{addBlog,findBlog,findandupdate}=require("../Controller/Blog.controller.js");
// const{validatePassword}=require("../Middlewares/ValidatePassword.js")
// const {emailValidation}=require("../Middlewares/ValidateEmail.js")
// const{validatePhoneno}=require("../Middlewares/ValidatePhoneno.js")
BlogRouter.get("/",(req,res)=>{return res.json({message:"It is a Blog Router"})})
BlogRouter.post("/addblog",addBlog)
BlogRouter.get("/findblog/:id",findBlog)
BlogRouter.patch("/findandupdate/:id",findandupdate)
// BlogRouter.delete("/findanddelete/:id",findanddelete)
module.exports=BlogRouter;