import type {Model} from 'mongoose'

export type Category = {
    id?: String
    name: String
    description?: String
}

export type CategoryModel = Model<Category>