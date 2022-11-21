import { GetAccountService } from './../services/GetAccountService';
import { PrismaGetAccountRepository } from '../repositories/PrismaGetAccountRepository';
import { PrismaCreateTransactionRepository } from '../repositories/PrismaCreateTransactionRepository';
import { CreateTransactionService } from '../services/CreateTransactionService';
import { CreateTransactionController } from '../controllers/CreateTransactionController';
import { GetUserService } from '../services/GetUserService';
import { PrismaGetUserRepository } from '../repositories/PrismaGetUserRepository';
import { PrismaUpdateAccountRepository } from '../repositories/PrismaUpdateAccountRepository';
import { UpdateAccountService } from '../services/UpdateAccountService';

export class CreateTransactionControllerFactory {
  static make() {
    const repository = new PrismaCreateTransactionRepository();
    const userAccount = new GetAccountService(new PrismaGetAccountRepository());
    const getUser = new GetUserService(new PrismaGetUserRepository());
    const updateAccount = new UpdateAccountService(
      new PrismaUpdateAccountRepository()
    );
    const service = new CreateTransactionService(
      repository,
      userAccount,
      getUser,
      updateAccount
    );
    const controller = new CreateTransactionController(service);

    return controller;
  }
}
