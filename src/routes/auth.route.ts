import express from 'express';
import type { Request } from 'express';
import type { User } from '../types/user.type';
import passport from 'passport';
import UserService from '../services/user.service';
import jwt from 'jsonwebtoken'


const router = express.Router();
const service = new UserService();

type RequestType = Request & {
    user: User
}

router.post (
    '/login',
    passport.authenticate('local', {session: false}),
    async (req: RequestType, res, next)=>{
        try{
            const{user} = req
            const payload = {sub: user.id}
            
            res.status(200).json({message: 'todo bien'})
        } catch(error){
            console.log(error)
            next(error)
        }
    } 
)

export default router