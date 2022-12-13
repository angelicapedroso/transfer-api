import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { IAccount } from "../interfaces/accountInterface";
import { UpdateAccountRepository } from "../services/UpdateAccountService";

export class PrismaUpdateAccountRepository implements UpdateAccountRepository {
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async update(id: number, balance: Decimal) {
    const account = await this.prisma.accounts.update({
      where: {
        id,
      },
      data: {
        balance,
      },
    });

    return account;
  }
}