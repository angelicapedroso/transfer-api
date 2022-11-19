import { CreateUserService } from './../services/CreateUserService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';

export class CreateUserController implements IController {
  constructor(private service: CreateUserService) {}

  async handle(req: IRequest): Promise<IResponse> {
    const user = await this.service.create(req.payload)
    return {
      status: 201,
      payload: user
    }
  }
}
