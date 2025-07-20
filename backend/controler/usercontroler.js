import usermodel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import validator from 'validator';
import bcrypt from 'bcryptjs';

dotenv.config();

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT,{expiresIn:'1d'});
}

const userLogin= async ()=>{
    const {email,password}=req.body;
    try{
       const user= await usermodel.findOne(email);
       if(!user){
        return res.json({success:false,message:"user does not exist"});
       }

       const missmatch=await bycrpt.compare(password,user.password);
       if(!missmatch){
        return res.json({success:false,message:"invalid credintial"});
       }

       const token=createToken(user._id.toString());
       return res.json({success:true,token});


    }catch(error){
        console.log(error)
        return res.json({success:false,message:'Error'});

    }
}


const registerUser = async (req,res)=>{
    try{
       const {name,password,email}=req.body;
       const normalized=email.toLowerCase();
        
       const exist= await usermodel.findOne({email:normalized});
       if(exist){
        return res.json({success:false,message:"user alraedy existe"});
       }
       if(!validator.isEmail({email:normalized})){
        return res.json({success:false,message:"make a correct email format"});
       }

       if(normalized.length<8){
        return res.json({success:false,message:'give an strong password'})
       }
       const salt=await bcrypt.genSalt(10);
       const hashedPassword= await bcrypt.hash(password,salt);

       const newUser=new usermodel({
        name:name,
        password:hashedPassword,
        email:normalized
       })
       newUser.name = newUser.name.trim(); 
       const user=await newUser.save();
       const token=createToken(user._id);
       return res.json({success:true,token});
    }catch(error){
        return res.status(500).json({success:false,message:'error'})
    }
};

export  {registerUser,userLogin};