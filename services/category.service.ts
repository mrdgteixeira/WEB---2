import { Category, CategoryRepository } from '../repositories/category.repository';
import { randomUUID } from 'crypto';

export const CategoryService = {
  getAll: () => CategoryRepository.findAll(),
  create: (name: string) => {
    const newCategory: Category = { id: randomUUID(), name };
    return CategoryRepository.create(newCategory);
  },
};
