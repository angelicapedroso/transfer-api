import { PrismaClient } from '@prisma/client';
import { IAccountWithUser } from '../interfaces/accountInterface';
import { GetAccountRepository } from '../services/GetAccountService';

export class PrismaGetAccountRepository implements GetAccountRepository {
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async getAccount(id: number): Promise<IAccountWithUser | null> {
    const account = await this.prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        account: {
          select: {
            balance: true,
          },
        },
      },
    });

    return account;
  }
}
