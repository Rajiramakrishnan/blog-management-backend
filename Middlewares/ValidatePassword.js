const validatePassword=(req,res,next)=>{
    const {Password}=req.body;
    try{
        if(Password.length<8){
            return res.status(400).json({message:"Password must contains min 8 characters."})
        }
        next();
    }
    catch(err){
        return res.status(500).json({message:"Error on signup"})
    }
    
}
module.exports={validatePassword}