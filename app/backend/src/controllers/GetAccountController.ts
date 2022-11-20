import { GetAccountService } from './../services/GetAccountService';
import {
  IController,
  IRequest,
  IResponse,
} from '../adapters/controllerInterface';
// import { ValidationError } from '../errors/validationError';

export class GetAccountController implements IController {
  constructor(private service: GetAccountService) {}

  async handle(req: IRequest): Promise<IResponse> {
    const { id } = req.params;
    const account = await this.service.getAccount(+id);
    return {
      status: 200,
      payload: account,
    };

    // if (!id || typeof id !== 'number') {
    //   return {
    //     status: 400,
    //     payload: {
    //       error: 'Credentials not valid',
    //     },
    //   };
    // }

    

    // try {
    //   return {
    //     status: 200,
    //     payload: account,
    //   };
    // } catch (err) {
    //   if (err instanceof ValidationError) {
    //     return {
    //       status: 400,
    //       payload: {
    //         error: err.message,
    //       },
    //     };
    //   }

    //   return {
    //     status: 500,
    //     payload: {
    //       error: 'Internal server error',
    //     },
    //   };
    // }
  }
}