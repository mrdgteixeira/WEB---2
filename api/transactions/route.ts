import { FastifyInstance } from 'fastify'
import { TransactionService } from '../../services/transaction.service'

export async function transactionRoutes(fastify: FastifyInstance) {
  fastify.get('/transactions', async (request, reply) => {
    return TransactionService.getAll()
  })

  fastify.post('/transactions', async (request, reply) => {
    const data = request.body as any
    const newTransaction = TransactionService.create(data)
    return newTransaction
  })
}
