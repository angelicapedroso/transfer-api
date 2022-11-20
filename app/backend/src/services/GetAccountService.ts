import { IAccount } from '../interfaces/accountInterface';
import { Account } from './../entities/Account';

export interface GetAccountRepository {
  getAccount(id: number): Promise<IAccount>;
}

export class GetAccountService {
  constructor(private repository: GetAccountRepository) {}

  async getAccount(id: number): Promise<IAccount> {
    const account = await this.repository.getAccount(id);
    return account;
  }
}
