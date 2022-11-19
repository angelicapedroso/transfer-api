import { PrismaClient } from '@prisma/client';
import { User } from '../entities/User';
import { CreateUserRepository } from '../services/CreateUserService';

export class PrismaCreateUserRepository implements CreateUserRepository {
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async create(user: User): Promise<void> {
    await this.prisma.users.create({
      data: {
        username: user.getUsername(),
        password: user.getPassword(),
        account: {
          create: {
            balance: 100,
          },
        },
      },
    });
  }
}
