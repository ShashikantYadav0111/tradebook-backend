import { User } from "../models/User.model.js";

export const register = async (req,res)=>{
    const {name,username,password,traderId} = req.body;
    try {
        const duplicateUser = await User.findOne({username},'-__v');
        console.log(duplicateUser)
        if(duplicateUser){
            console.log("User already exist");
            res.status(400).json({
                success:false,
                message:"User Already Exist",
            })
        }
        const user = new User({name,username,password,traderId});
        await user.save();
        res.status(200).json({
            success:true,
            message:"User Created Successfully",
        })
        
    } catch (error) {
        console.error(error.message);
    }
}

export const getUserbyTraderId = async (req,res) =>{
    const traderId = req.params.traderId;
    try{

        const user = await User.findOne({traderId});
        if(!user){
            console.log("User Doesnot exist!");
            res.status(400).json({
                success:false,
                message:"User doesnot exist!"
            })
        }
        res.status(200).json({
            ...user._doc,
            password:undefined,
        });
    }catch(error)
    {
        console.error(error.message)
    }
}

export const getUserbyUsername = async(req,res) =>{
    const username = req.params.username;
    try{

        const user = await User.findOne({username});
        if(!user){
            console.log("User Doesnot exist!");
            res.status(400).json({
                success:false,
                message:"User doesnot exist!"
            })
        }
        res.status(200).json(user);
    }catch(error)
    {
        console.error(error.message)
    }
}

export const login = async (req,res)=>{
    const {username,password} = req.body;

    console.log("here after login",username,password);
    try {
        const user = await User.findOne({username});
        if(!user){
            console.log("login failed:No User found!");
            res.status(400).json({
                success:false,
                message:"No user found by this username and password!!"
            })
        }

        if(user.password == password){
            res.status(200).json(user);
        }
        else{
            
            throw new Error("Wrong username or password!!")
        }
        
    } catch (error) {
        console.error(error.message)
    }
}