import express from 'express'
import { User, UserModel } from '../types/user.type'
import UserService from '../services/user.service'
import boom from '@hapi/boom'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'

const router = express.Router()
const service = new UserService()

router.post('/', async (req, res, next) => {
  try {
    const user: User = req.body
    const newUser = await service.create(user)
    res.status(201).json({ user: newUser.toClient() })
  } catch (error) {
    next(error)
  }
})

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: UserRequestType, res, next) => {
    try {
      const { user } = req
      const filters = req.query
      console.log(user)
      const users = await service.findAll(filters)
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
)



router.get('/', async (req, res, next) => {
  try {
    const { email } = req.query
    const user = await service.findByEmail(email as string)
    console.log({ user })

    res.status(200).json({ user })
  } catch (error) {
    next(error)
  }
})

export default router