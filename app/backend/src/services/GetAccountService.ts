import { ValidationError } from '../errors/validationError';
import { IAccountWithUser } from '../interfaces/accountInterface';

export interface GetAccountRepository {
  getAccount(id: number): Promise<IAccountWithUser | null>;
}

export class GetAccountService {
  constructor(private repository: GetAccountRepository) {}

  async getAccount(id: number): Promise<IAccountWithUser | null> {
    const account = await this.repository.getAccount(id);
    if (!account) {
      throw new ValidationError('User not found');
    }
    return account;
  }
}
