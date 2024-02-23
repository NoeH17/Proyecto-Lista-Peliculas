import Users from '../models/user.model';
import {User, UserModel} from '../types/user.type';
import boom from '@hapi/boom'

class UserService{
    async create (user: User){
        const newUser = await Users.create(user).catch((error)=>{
            console.log('Error creating user', error);
            throw boom.badRequest("Could not create user");
        })
        return newUser;
    }

    async findAll(){
        const users = await Users.find().catch((error)=>{
            console.log('Error while connecting to the DB', error)
        })
        if(!users) {
            throw boom.notFound('Users not found');
        } 
        return users;
    }

    async findById(id: string){
        const user = await Users.findById(id).catch((error)=>{
            console.log('Error while connecting to the DB', error)
        })

        if(!user){
            throw boom.notFound("Category not found")
        }
        return user
    }
}

export default UserService;