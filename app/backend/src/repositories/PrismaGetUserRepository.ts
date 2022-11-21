import { PrismaClient } from '@prisma/client';
import { IUserWithoutPassword } from '../interfaces/userInterface';
import { GetUserRepository } from '../services/GetUserService';

export class PrismaGetUserRepository implements GetUserRepository {
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async getUserByUsername(username: string): Promise<IUserWithoutPassword | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
      },
    });

    return user;
  }
}
