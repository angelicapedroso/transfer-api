import { PrismaClient } from '@prisma/client';
import { User } from '../entities/User';
import { IUser } from '../interfaces/userInterface';
import { LoginRepository } from '../services/LoginService';

export class PrismaLoginRepository implements LoginRepository {
  private prisma: PrismaClient;

  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma;
  }

  async findUnique(user: User): Promise<IUser | null> {
    const userFound = await this.prisma.users.findUnique({
      where: {
        username: user.getUsername(),
      },
    });
    return userFound;
  }
}
