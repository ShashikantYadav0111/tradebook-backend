import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    traderId:String,
},{timestamps:true});

export const User = mongoose.model('User',userSchema);