import Categories from '../models/category.model'
import { Category, CategoryModel } from '../types/category.type'
import boom from '@hapi/boom'

class CategoryService {
  async create(category: Category) {
    const newCategory = await Categories.create(category).catch((error) => {
      console.log('Could not save category', error)
    })

    return newCategory
  }

  
  async findSecondCategory() {
    const categories = await Categories.find().sort({ _id: 1 }).limit(2).catch((error) => {
      console.log('Error while connecting to the DB', error);
      throw boom.internal('Internal server error');
    });
  
    if (!categories || categories.length < 2) {
      throw boom.notFound('There are not enough categories');
    }
  
    return categories[1];
  }
  
  

  async findAll() {
    const categories = await Categories.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!categories) {
      throw boom.notFound('There are not categories')
    }

    return categories
  }

  async findById(id: string) {
    const category = await Categories.findById(id).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }

    return category
  }

  async findByName(name: string) {
    const category = await Categories.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }
  }

}

export default CategoryService

