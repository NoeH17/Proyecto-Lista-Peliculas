import type { Model} from 'mongoose'
import type { Request } from 'express'
import { ObjectId } from 'mongoose'

export type Category = {
  id?: string
  name: string
  description?: string
}

export type CategoryRequestType = Request & {
  category:{
    sub: ObjectId
  }
  
}

export type CategoryModel = Model<Category>
