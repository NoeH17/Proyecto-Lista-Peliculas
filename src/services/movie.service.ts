import Movies from '../models/movie.model'
import {Movie, MovieModel} from '../types/movie.type'
import boom from '@hapi/boom'

class MovieService {
    async create(movie: Movie){
        const newMovie = await Movies.create(movie).catch((error)=>{
            console.log('Could not save Movie', error)
        })
        return newMovie;
    }

    async findAll(filters) { 
        const movies = await Movies.find({...filters}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })
    
        if (!movies) {
            throw boom.notFound('There are not movies')
        }
    
        return movies
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