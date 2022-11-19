import { PrismaCreateUserRepository } from '../repositories/PrismaCreateUserRepository';
import { CreateUserService } from '../services/CreateUserService';
import { CreateUserController } from '../controllers/CreateUserController';

export class CreateUserControllerFactory {
  static make() {
    const repository = new PrismaCreateUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}
