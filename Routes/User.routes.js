const express=require("express")
const UserRouter=express.Router();
const{addUser,findUser,findandupdate, findanddelete}=require("../Controller/User.controller.js");
const {validatePassword}=require("../Middlewares/ValidatePassword.js")
const {emailValidation}=require("../Middlewares/ValidateEmail.js")
const {validatePhoneno}=require("../Middlewares/ValidatePhoneno.js")
UserRouter.get("/",(req,res)=>{
    return res.json({message:"It is a User Router"})
})
UserRouter.post("/adduser",emailValidation,validatePassword,validatePhoneno,addUser)
UserRouter.get("/finduser/:id",findUser)
UserRouter.patch("/findandupdate/:id",findandupdate)
UserRouter.delete("/findanddelete/:id",findanddelete)
module.exports=UserRouter;