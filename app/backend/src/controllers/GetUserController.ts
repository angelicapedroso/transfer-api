import { GetUserService } from './../services/GetUserService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';
import { ValidationError } from '../errors/validationError';

export class GetUserController implements IController {
  constructor(private service: GetUserService) {}

  async handle(req: IRequest): Promise<IResponse> {
    const { username } = req.payload;
    
    if (!username || typeof username !== 'string') {
      return {
        status: 400,
        payload: {
          error: 'Credentials not valid',
        },
      };
    }

    try {
      const user = await this.service.getUserByUsername(username);
      return {
        status: 200,
        payload: user,
      };
    }
    catch (err) {
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
