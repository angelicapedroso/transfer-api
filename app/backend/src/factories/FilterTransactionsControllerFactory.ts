import { FilterTransactionsController } from '../controllers/FilterTransactionsController';
import { PrismaFilterTransactionRepository } from '../repositories/PrismaFilterTransactionRepository';
import { FilterTransactionsService } from '../services/FilterTransactionsService';

export class FilterTransactionsControllerFactory {
  static make() {
    const repository = new PrismaFilterTransactionRepository();
    const service = new FilterTransactionsService(repository);
    const controller = new FilterTransactionsController(service);

    return controller;
  }
}
