import { PrismaClient } from '@prisma/client';
import { Transaction } from '../entities/Transaction';
import { CreateTransactionRepository } from '../services/CreateTransactionService';

export class PrismaCreateTransactionRepository
  implements CreateTransactionRepository
{
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async create(transaction: Transaction) {
    const transactionCreated = await this.prisma.transactions.create({
      data: {
        debitedAccountId: transaction.getDebitedAccountId(),
        creditedAccountId: transaction.getCreditedAccountId(),
        value: transaction.getValue(),
      },
    });

    return transactionCreated;
  }
}
