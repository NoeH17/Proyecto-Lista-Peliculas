import express from 'express'
import {Movie} from '../types/movie.type'
import MovieService  from '../services/movie.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'
import { CategoryRequestType } from '../types/category.type'
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new MovieService()

router.get('/findSecondMovie', async (req, res, next) =>{
  try{
    const secondMovie = await service.findSecondMovie();
    res.status(200).json(secondMovie);
  } catch (error){
    next(error);
  }
});


router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req: CategoryRequestType, res) => {
      const {category: sub} = req
      const movie: Movie = req.body
      const newMovie = await service.create(movie)
  
      res.status(201).json(newMovie)
    }
  )


  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req: CategoryRequestType, res, next) => {
      try {
        //obtener filtros del req.query
        const { user } = req
        const filters = req.query
        /*
          {
            title: "Los Increibles",
            director: "Chabelo"
          }
        */
        console.log(user)
        const movies = await service.findAll(filters)
        res.status(200).json(movies)
      } catch (error) {
        next(error)
      }
    }
  )



  router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const movie = await service.findById(req.params.id)
        res.status(200).json(movie)
      } catch (error) {
        next(error)
      }
    }
  )


  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const movie = await service.findById(req.query.title as string)
        res.status(200).json(movie)
      } catch (error) {
        next(error)
      }
    }
  )

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const movie = await service.findById(req.query.director as string)
        res.status(200).json(movie)
      } catch (error) {
        next(error)
      }
    }
  )

export default router