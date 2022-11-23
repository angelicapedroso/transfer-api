import { PrismaClient } from '@prisma/client';
import { ITransactionWithUser } from '../interfaces/transactionInterface';
import {
  FilterTransactionsRepository,
  IFilterTransactions,
} from '../services/FilterTransactionsService';

export class PrismaFilterTransactionRepository
  implements FilterTransactionsRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async filterTransactions(data: IFilterTransactions): Promise<ITransactionWithUser> {
    const { date, creditedId, debitedId } = data;

    const userCashIn = await this.prisma.users.findUnique({
      where: {
        id: creditedId || 0,
      },
      select: {
        id: true,
        username: true,
      },
    });

    const transactions = await this.prisma.transactions.findMany({
      where: {
        debitedAccountId: debitedId,
        creditedAccountId: creditedId,
        createdAt: date,
      },
    });

    return { userCashIn, transactions };
  }
}
