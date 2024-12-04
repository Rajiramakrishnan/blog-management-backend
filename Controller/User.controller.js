const { UserModel } = require("../Model/User.model");
const bcrypt = require("bcrypt");



const addUser = async (req, res) => {
  try {
    console.log("body", req.body);
    const {
      UserName,
      Email,
      Password,
      PhoneNumber,
      Place,
      City,
      State,
      DateOfBirth,
    } = req.body;
    const saltRound = 10;
    console.log(Password);
    const hashedPassword = await bcrypt.hash(Password, saltRound);
    console.log("hashed password", hashedPassword);
    const user = new UserModel({
      UserName,
      Email,
      Password:hashedPassword,
      PhoneNumber,
      Place,
      City,
      State,
      DateOfBirth
    });
    await user.save();
    return res.status(201).json({ message: "User Record created" });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};

const findUser=async(req,res)=>{
  try{
    const userId=req.params.id;
    console.log(userId);
     const user=await UserModel.findById(userId);
     if(!user){
      return res.status(404).json({message:"User not found"})
     }
    return res.status(200).json({message:"User found",data:user})
  }catch(error){
    return res.status(500).json({message:"Server Error",error:error.message})
  }
}
const findandupdate=async(req,res)=>{
  try{
    const userId=req.params.id;
    const newPassword=req.body.newPassword;
    console.log(newPassword);
    
    const saltRound=10;
    const hashedNewPassword=await bcrypt.hash(newPassword, saltRound)
    console.log(hashedNewPassword);
    const newEmail=req.body.newEmail;
    console.log(newEmail);
    const newuser=await UserModel.findByIdAndUpdate(userId,{Password:hashedNewPassword,Email:newEmail},{new:true})
    console.log(newuser);
    if(!newuser){
      return res.status(404).json({message:"User not found"})
    }
    else{
      return res. status(200).json({message:"User updated",data:newuser})
    }
    
    
  }
  catch(error){
    return res.status(500).json({message:"server error"})
  }
}
const findanddelete=async (req,res)=>{
  try{
    const userId=req.params.id;
    const delUser=await UserModel.findByIdAndDelete(userId)
    console.log(delUser);
    if(!delUser){
      return res.status(404).json({message:"user not deleted"})
    }
    else{
      return res.status(200).json({message:"User deleted",data:delUser})
    }
  }
  catch(error){
    return res.status(500).json({message:"server error",error:error.message})
  }
}
module.exports={addUser,findUser,findandupdate,findanddelete}
