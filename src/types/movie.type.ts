import type { Model } from 'mongoose'

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

}

export type MovieModel = Model<Movie>