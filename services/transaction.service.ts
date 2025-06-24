import { Transaction, TransactionRepository } from '../repositories/transaction.repository';
import { randomUUID } from 'crypto';

export const TransactionService = {
  getAll: () => TransactionRepository.findAll(),
  create: (data: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = { id: randomUUID(), ...data };
    return TransactionRepository.create(newTransaction);
  },
};
