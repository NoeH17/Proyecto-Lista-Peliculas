import Users from '../models/user.model';
import {User, UserModel} from '../types/user.type';
import boom from '@hapi/boom'
import bcrypt from 'bcrypt'


class UserService{
    async create (user: User){
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = await Users.create({...user, password: hashedPassword }).catch((error)=>{
            console.log('Error creating user', error);
        })

        if (!newUser) {
            throw boom.badRequest('Could not create user')
          }

        /*return newUser;*/
        const newUserObject = newUser.toJSON()
        delete newUserObject.password
        return newUserObject
    }

   
    /*
    async findById(id: string){
        const user = await Users.findById(id).catch((error)=>{
            console.log('Error while connecting to the DB', error)
        })

        if(!user){
            throw boom.notFound("Category not found")
        }
        return user
    }*/

    async findByEmail(email: string) {
        const user = await Users.findOne({ email }).catch((error) => {
          console.log('Could not retrieve user info', error)
        })
    
        if (!user) {
          throw boom.notFound('User not found')
        }
    
        //return user
        const userObject = user.toJSON()
        delete userObject.password
        return userObject
      }


      async findAllU() {
        const users = await Users.find().catch((error) => {
          console.log('Error while connecting to the DB', error)
        })
    
        if (!users) {
          throw boom.notFound('There are not users')
        }
    
        return users
      }
}

export default UserService;
