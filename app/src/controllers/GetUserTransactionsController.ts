import { GetUserTransactionsService } from './../services/GetUserTransactionsService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';

export class GetUserTransactionsController implements IController {
  constructor(private service: GetUserTransactionsService) {}

  async handle(req: IRequest): Promise<IResponse> {
    const { id } = req.params;

    if (!id) {
      return {
        status: 400,
        payload: {
          message: 'Missing id',
        },
      };
    }

    try {
      const transactions = await this.service.getUserTransactions(Number(id));

      return {
        status: 200,
        payload: transactions,
      };
    } catch (err) {
      return {
        status: 500,
        payload: {
          message: 'Internal server error',
        },
      };
    }
  }
}
