import { ValidationError } from '../errors/validationError';
import { ITransactionWithUser } from '../interfaces/transactionInterface';

export interface IFilterTransactions {
  date?: Date;
  creditedId?: number;
  debitedId?: number;
}

export interface FilterTransactionsRepository {
  filterTransactions(data: IFilterTransactions): Promise<ITransactionWithUser>;
}

export class FilterTransactionsService {
  constructor(
    private filterTransactionsRepository: FilterTransactionsRepository
  ) {}

  async execute(data: IFilterTransactions): Promise<ITransactionWithUser> {
    const transactions =
      await this.filterTransactionsRepository.filterTransactions(data);

      if (!transactions) {
        throw new ValidationError('Transactions not found');
      }

    return transactions;
  }
}
