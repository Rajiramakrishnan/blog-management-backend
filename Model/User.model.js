const mongoose=require("mongoose")
const {Schema,model}=mongoose
const UserSchema=Schema({
    UserName:{
        required:true,
        type:String
    },
    Email:{
        required:true,
        type:String,
    },
    Password:{
        required:true,
        type:String
    },
    PhoneNumber:{
        required:true,
        type:String
    },
    Place:{
        required:true,
        type:String
    },
    City:{
required:true,
type:String
    },
    State:{
required:true,
type:String
    },
    DateOfBirth:{
        required:true,
        type:String
    },
},
{
    timestamps:true
})
const UserModel=model("User",UserSchema)
module.exports={UserModel}