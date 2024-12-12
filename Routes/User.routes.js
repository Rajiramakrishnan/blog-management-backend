const express=require("express")
const UserRouter=express.Router();
const{addUser,findUser,findandupdate, findanddelete,login}=require("../Controller/User.controller.js");
const {validatePassword}=require("../Middlewares/ValidatePassword.js")
const {emailValidation}=require("../Middlewares/ValidateEmail.js")
const {validatePhoneno}=require("../Middlewares/ValidatePhoneno.js");
const { protectRoute } = require("../Middlewares/jwtAuth.js");

UserRouter.get("/",(req,res)=>{
    return res.json({message:"It is a User Router"})
})
UserRouter.post("/adduser",emailValidation,validatePassword,validatePhoneno,addUser)
UserRouter.get("/finduser/:id",protectRoute, findUser)
UserRouter.patch("/findandupdate/:id",findandupdate)
UserRouter.delete("/findanddelete/:id",findanddelete)
UserRouter.post("/login",login)
module.exports=UserRouter;