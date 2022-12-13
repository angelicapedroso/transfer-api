import { LoginService } from './../services/LoginService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';
import { ValidationError } from '../errors/validationError';

export class LoginController implements IController {
  constructor(private service: LoginService) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { username, password } = request.payload;

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
      const token = await this.service.login({ username, password });
      return {
        status: 200,
        payload: token,
      };
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          status: 400,
          payload: {
            message: error.message,
          },
        };
      }
      return {
        status: 500,
        payload: {
          message: 'Internal server error',
        },
      };
    }
  }
}
