import type { Model } from 'mongoose'
import { Category } from './category.type'

export type Movie = {
    id?: string
    title: string
    director: string
    year: number
    duration: string
    rating: String
    synopsis: string
    cast: string[]
    imageUrl: string
    category: Category
}

export type MovieModel = Model<Movie>