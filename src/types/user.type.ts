import type {Model} from 'mongoose';

export type User = {
    id?: String
    name: String,
    email:  String,
    password: String,
    age: String,
    phoneNumber: string,
    createdAt?: Date,
    lastModified?: Date

}

export type UserModel = Model<User>