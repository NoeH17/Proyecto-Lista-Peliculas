import { Schema, model } from 'mongoose'
import { Movie, MovieModel } from '../types/movie.type'

const Movies = new Schema<Movie, MovieModel>({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        //required: true
    },
    
    duration: {
        type: String,
        //required: true
    },
    rating: {
        type: String,
        //required: true
    },
    synopsis: {
        type: String,
        //required: true,
        trim: true
    },
    cast: {
        type: [String],
        //required: true
    },
    imageUrl: {
        type: String,
        trim: true
    }
})

export default model('Movie', Movies)