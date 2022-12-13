import { GetAccountService } from './../services/GetAccountService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';

export class GetAccountController implements IController {
  constructor(private service: GetAccountService) {}

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
      const account = await this.service.getAccount(Number(id));

      return {
        status: 200,
        payload: account,
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
