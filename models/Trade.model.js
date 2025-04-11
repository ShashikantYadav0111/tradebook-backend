import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
    symbol:{
        type:String,
        required:true
    },
    entry:Number, 
    exit:Number,
    quantity:{
        type:Number,
        default:0
    },
    notes:{
        type:String,
        default:"Empty"
    },
    profit:{
        type:Number,
        default:0
    },
    exitDate:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        default:"Open"
    },
    target:{
        type:Number,
        default:0
    },
    stoploss:Number,
    traderId:{
        type:String,
        default:"Shashikant01"
    },
},{timestamps:true});

export const Trade = mongoose.model('Trades',tradeSchema); 
