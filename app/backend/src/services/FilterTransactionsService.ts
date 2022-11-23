import { ValidationError } from '../errors/validationError';
import { ITransaction } from '../interfaces/transactionInterface';

export interface IFilterTransactions {
  date?: Date;
  creditedId?: number;
  debitedId?: number;
}

export interface FilterTransactionsRepository {
  filterTransactions(data: IFilterTransactions): Promise<ITransaction[]>;
}

export class FilterTransactionsService {
  constructor(
    private filterTransactionsRepository: FilterTransactionsRepository
  ) {}

  async execute(data: IFilterTransactions): Promise<ITransaction[]> {
    const transactions =
      await this.filterTransactionsRepository.filterTransactions(data);

      if (!transactions) {
        throw new ValidationError('Transactions not found');
      }

    return transactions;
  }
}
