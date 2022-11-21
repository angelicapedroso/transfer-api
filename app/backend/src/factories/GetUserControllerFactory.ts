import { GetUserController } from "../controllers/GetUserController";
import { PrismaGetUserRepository } from "../repositories/PrismaGetUserRepository";
import { GetUserService } from "../services/GetUserService";

export class GetUserControllerFactory {
  static make() {
    const repository = new PrismaGetUserRepository();
    const service = new GetUserService(repository);
    const controller = new GetUserController(service);

    return controller;
  }
}
