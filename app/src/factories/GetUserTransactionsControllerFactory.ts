
import { GetUserTransactionsController } from '../controllers/GetUserTransactionsController';
import { PrismaGetUserTransactionsRepository } from '../repositories/PrismaGetUserTransactions';
import { GetUserTransactionsService } from '../services/GetUserTransactionsService';

export class GetUserTransactionsControllerFactory {
  static make() {
    const repository = new PrismaGetUserTransactionsRepository();
    const service = new GetUserTransactionsService(repository);
    const controller = new GetUserTransactionsController(service);

    return controller;
  }
}
