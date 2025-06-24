import { FastifyInstance } from 'fastify';
import { BankService } from '../../services/bank.service';

export async function bankRoutes(fastify: FastifyInstance) {
  fastify.get('/banks', async (request, reply) => {
    return BankService.getAll();
  });

  fastify.post('/banks', async (request, reply) => {
    const { name } = request.body as { name: string };
    const newBank = BankService.create(name);
    return newBank;
  });
}