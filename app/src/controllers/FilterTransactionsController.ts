import { FilterTransactionsService } from './../services/FilterTransactionsService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';

export class FilterTransactionsController implements IController {
  constructor(private filterTransactionsService: FilterTransactionsService) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { date, creditedId, debitedId } = request.query;

    if (!date && !creditedId && !debitedId) {
      return {
        status: 400,
        payload: { message: 'Missing required fields' },
      };
    }

    const CREDITED_ID_NUMBER = Number(creditedId);
    const DEBITED_ID_NUMBER = Number(debitedId);

    try {
      const transactions = await this.filterTransactionsService.execute({
        date,
        creditedId: CREDITED_ID_NUMBER ? CREDITED_ID_NUMBER : undefined,
        debitedId: DEBITED_ID_NUMBER ? DEBITED_ID_NUMBER : undefined,
      });

      return {
        status: 200,
        payload: transactions,
      };
    } catch (err) {
      if (err instanceof Error) {
        return {
          status: 500,
          payload: { message: err.message },
        };
      }
    }

    return {
      status: 500,
      payload: {
        error: 'Internal server error',
      },
    };
  }
}
