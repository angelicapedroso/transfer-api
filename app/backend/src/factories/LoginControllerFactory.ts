import { PrismaLoginRepository } from '../repositories/PrismaLoginRepository';
import { LoginService } from '../services/LoginService';
import { LoginController } from '../controllers/LoginController';

export class LoginControllerFactory {
  static make() {
    const repository = new PrismaLoginRepository();
    const service = new LoginService(repository);
    const controller = new LoginController(service);

    return controller;
  }
}
