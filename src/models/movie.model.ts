import { Schema, model } from 'mongoose'
import { Movie, MovieModel } from '../types/movie.type'
import {  } from './category.model'
import {CATEGORY_REFERENCE} from '../models/category.model'

export const MOVIE_REFERENCE = 'Movie'

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
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'CATEGORY_REFERENCE',
    }
})

export default model('MOVIE_REFERENCE', Movies)