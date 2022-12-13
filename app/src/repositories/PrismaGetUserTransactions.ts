import { PrismaClient } from '@prisma/client';
import { ITransaction } from '../interfaces/transactionInterface';
import { GetUserTransactionsRepository } from '../services/GetUserTransactionsService';

export class PrismaGetUserTransactionsRepository
  implements GetUserTransactionsRepository
{
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async getUserTransactions(userId: number): Promise<ITransaction[]> {
    const transactions = await this.prisma.transactions.findMany({
      where: {
        OR: [
          {
            debitedAccountId: userId,
          },
          {
            creditedAccountId: userId,
          },
        ],
      },
      select: {
        id: true,
        debitedAccountId: true,
        creditedAccountId: true,
        value: true,
        createdAt: true,
      },
    });

    return transactions;
  }
}
