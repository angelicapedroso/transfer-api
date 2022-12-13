import { PrismaGetAccountRepository } from '../repositories/PrismaGetAccountRepository';
import { GetAccountService } from '../services/GetAccountService';
import { GetAccountController } from '../controllers/GetAccountController';

export class GetAccountControllerFactory {
  static make() {
    const repository = new PrismaGetAccountRepository();
    const service = new GetAccountService(repository);
    const controller = new GetAccountController(service);

    return controller;
  }
}
