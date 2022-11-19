import { IUser } from './../interfaces/userInterface';
import { PrismaClient } from '@prisma/client';
import { User } from '../entities/User';
import { CreateUserRepository } from '../services/CreateUserService';

export class PrismaCreateUserRepository implements CreateUserRepository {
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async create(user: User): Promise<{ user: IUser }> {
    const newUser = await this.prisma.users.create({
      data: {
        username: user.getUsername(),
        password: user.getPassword(),
        accountId: 1,
      },
    });

    return { user: newUser };
  }
}
