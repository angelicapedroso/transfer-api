import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserService } from "../services/CreateUserService";
import { createUserRepository } from '../repositories/CreateUserRepository';

export class CreateUserControllerFactory {
  static make() {
    const repository = new createUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}