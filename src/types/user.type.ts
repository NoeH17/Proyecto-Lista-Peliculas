import type {Model} from 'mongoose';

export type User = {
    id?: String
    username: String,
    email:  String,
    password: String,
    age: number
}

export type UserModel = Model<User>