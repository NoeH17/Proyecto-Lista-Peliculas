import { Schema, model } from "mongoose";
import {User, UserModel} from  '../types/user.type';
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '../utils/constants'

const Users = new Schema <User, UserModel>({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
        match : [EMAIL_REGEX,"Please enter a valid email"]
    },

    password:{
        type:String,
        required:true,
    },

    age:{
        type: String
    },
    phoneNumber:{
        type: String,
        required: true,
        trim: true,
        match: [PHONE_NUMBER_REGEX, 'Please enter a valid phonenumber']

    },
    createdAt:{
        type: Date,
        default: ()=> new Date()
    },
    lastModified:{
        type: Date,
        default: ()=> new Date()
    }
})

export default model('User', Users)