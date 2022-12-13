import { CreateUserService } from './../services/CreateUserService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';
import { ValidationError } from '../errors/validationError';

export class CreateUserController implements IController {
  constructor(private service: CreateUserService) {}

  async handle(req: IRequest): Promise<IResponse> {
    const { username, password } = req.payload;

    if (!username || typeof username !== 'string') {
      return {
        status: 400,
        payload: {
          error: 'Credentials not valid',
        },
      };
    }

    if (!password || typeof password !== 'string') {
      return {
        status: 400,
        payload: {
          error: 'Credentials not valid',
        },
      };
    }

    try {
      const user = await this.service.create(req.payload);
      return {
        status: 201,
        payload: user,
      };
    } catch (err) {
      if (err instanceof ValidationError) {
        return {
          status: 400,
          payload: {
            error: err.message,
          },
        };
      }

      return {
        status: 500,
        payload: {
          error: 'Internal server error',
        },
      };
    }
  }
}
