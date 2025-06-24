import { FastifyInstance } from 'fastify';
import { CategoryService } from '../../services/category.service';

export async function categoryRoutes(fastify: FastifyInstance) {
  fastify.get('/categories', async (request, reply) => {
    return CategoryService.getAll();
  });

  fastify.post('/categories', async (request, reply) => {
    const { name } = request.body as { name: string };
    const newCategory = CategoryService.create(name);
    return newCategory;
  });
}