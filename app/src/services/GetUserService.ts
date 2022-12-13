import { IUserWithoutPassword } from '../interfaces/userInterface';
import { ValidationError } from '../errors/validationError';

export interface GetUserRepository {
  getUserByUsername(username: string): Promise<IUserWithoutPassword | null>;
}

export class GetUserService {
  constructor(private repository: GetUserRepository) {}

  async getUserByUsername(
    username: string
  ): Promise<IUserWithoutPassword | null> {
    const user = await this.repository.getUserByUsername(username);
    if (!user) {
      throw new ValidationError('User not found');
    }
    return user;
  }
}
