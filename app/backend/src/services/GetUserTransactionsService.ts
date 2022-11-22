import { ITransaction } from "../interfaces/transactionInterface";

export interface GetUserTransactionsRepository {
  getUserTransactions(userId: number): Promise<ITransaction[]>;
}

export class GetUserTransactionsService {
  constructor(private repository: GetUserTransactionsRepository) {}

  async getUserTransactions(userId: number): Promise<ITransaction[]> {
    const transactions = await this.repository.getUserTransactions(userId);
    return transactions;
  }
}
