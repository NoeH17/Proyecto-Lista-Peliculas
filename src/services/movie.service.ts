import { ObjectId } from 'mongoose'
import Movies from '../models/movie.model'
import {Movie, MovieModel} from '../types/movie.type'
import boom from '@hapi/boom'


class MovieService {
    async create(movie: Movie){
        const newMovie = await Movies.create({...movie}).catch((error)=>{
            console.log('Could not save Movie', error)
        })

        const existingMovie = await this.findById((newMovie as any)._id)

        return existingMovie.populate([{ path: 'category', strictPopulate: false }]);
    }
    

    async findAll(filters) { 
        const movies = await Movies.find({...filters}).populate([{ path: 'category', strictPopulate: false }]).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })
    
        if (!movies) {
            throw boom.notFound('There are not movies')
        }
    
        return movies
    }

    async findSecondMovie(){
      const movies = await Movies.find().sort({ _id: 1}).limit(2).catch((error)=>{
        console.log('Error while connecting to the DB', error);
        throw boom.internal('Internal server error');
      });

      if(!movies || movies.length < 2){
        throw boom.notFound('There are not enough categories');
      }

      return movies[1];
    }


    async findById(id: string) {
        const movie = await Movies.findById(id).catch((error) => {
          console.log('Error while connecting to the DB', error)
        })
    
        if (!movie) {
          throw boom.notFound('Movie not found')
        }
    
        return movie
      }

      async findByName(title: string) {
        const movie = await Movies.findOne({ title }).catch((error) => {
          console.log('Error while connecting to the DB', error)
        })
    
        if (!movie) {
          throw boom.notFound('Movie not found')
        }
        return movie
      }


      async findByDirector(director: string) {
        const movie = await Movies.findOne({ director }).catch((error) => {
          console.log('Error while connecting to the DB', error)
        })
    
        if (!movie) {
          throw boom.notFound('Movie not found')
        }
        return movie
      }

      async findBySynopsis(synopsis: string) {
        const movie = await Movies.findOne({ synopsis }).catch((error) => {
          console.log('Error while connecting to the DB', error)
        })
    
        if (!movie) {
          throw boom.notFound('Movie not found')
        }
        return movie
      }

}

export default MovieService