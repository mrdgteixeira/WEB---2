import { Bank, BankRepository } from '../repositories/bank.repository';
import { randomUUID } from 'crypto';

export const BankService = {
  getAll: () => BankRepository.findAll(),
  create: (name: string) => {
    const newBank: Bank = { id: randomUUID(), name };
    return BankRepository.create(newBank);
  },
};