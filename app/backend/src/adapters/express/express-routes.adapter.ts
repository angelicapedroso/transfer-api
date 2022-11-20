import { IController, IRequest, IResponse, INext } from '../controllerInterface';
import { Request, Response, NextFunction } from 'express';

export default class ExpressRoutesAdapter {
  static adapt(controller: IController) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const request: IRequest = {
        payload: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      };
      const nextFunction: INext = {
        next,
      };
      const response: IResponse | undefined = await controller.handle(request, nextFunction);
      if (response) {
        res.status(response.status).json(response.payload);
      }
    };
  }
}
