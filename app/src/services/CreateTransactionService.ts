import { Transaction } from '../entities/Transaction';
import { ValidationError } from '../errors/validationError';
import { GetAccountService } from './GetAccountService';
import { GetUserService } from './GetUserService';
import { UpdateAccountService } from './UpdateAccountService';
import {
  ITransaction,
  ITransactionCreate,
} from '../interfaces/transactionInterface';

export interface CreateTransactionRepository {
  create(transaction: Transaction): Promise<ITransaction>;
}

export class CreateTransactionService {
  constructor(
    private repository: CreateTransactionRepository,
    private userAccount: GetAccountService,
    private getUser: GetUserService,
    private updateAccount: UpdateAccountService
  ) {}

  async create(transaction: ITransactionCreate) {
    const { debitedAccountId, value, usernameCredited } = transaction;

    const accountDebited = await this.userAccount.getAccount(debitedAccountId);

    const username = await this.getUser.getUserByUsername(usernameCredited);

    if (!username) {
      throw new ValidationError('User not found');
    }

    if (accountDebited!.account.balance < value) {
      throw new ValidationError('Insufficient funds');
    }

    if (accountDebited!.id === username.id) {
      throw new ValidationError('You cannot transfer to yourself');
    }

    const accountCredited = await this.userAccount.getAccount(username.id);

    const transactionCreated = new Transaction(
      debitedAccountId,
      accountCredited!.id,
      usernameCredited,
      value
    );

    const newBalanceDebited = accountDebited!.account.balance.minus(value);
    const newBalanceCredited = accountCredited!.account.balance.plus(value);

    await this.updateAccount.update(debitedAccountId, newBalanceDebited);
    await this.updateAccount.update(accountCredited!.id, newBalanceCredited);

    const newTransaction = this.repository.create(transactionCreated);

    return newTransaction;
  }
}
