import { CreateTransactionService } from './../services/CreateTransactionService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';
import { ValidationError } from '../errors/validationError';

export class CreateTransactionController implements IController {
  constructor(private service: CreateTransactionService) {}

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const transaction = await this.service.create(req.payload);
      return {
        status: 201,
        payload: transaction,
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
