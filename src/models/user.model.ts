import { Schema, model } from "mongoose";
import {User, UserModel} from  '../types/user.type';

const Users = new Schema <User, UserModel>({
    username:{
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },

    password:{
        type:String,
        required:true,
    },

    age:{
        type:Number
    }
})

export default model('User', Users)