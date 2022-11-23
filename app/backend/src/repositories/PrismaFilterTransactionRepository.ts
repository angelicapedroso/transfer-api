import { PrismaClient } from '@prisma/client';
import { ITransaction } from '../interfaces/transactionInterface';
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

  async filterTransactions(data: IFilterTransactions): Promise<ITransaction[]> {
    const { date, creditedId, debitedId } = data;

    const transactions = await this.prisma.transactions.findMany({
      where: {
        debitedAccountId: debitedId,
        creditedAccountId: creditedId,
        createdAt: date,
      },
    });

    return transactions;
  }
}
