import Router from 'express';
import ExpressRoutesAdapter from '../adapters/express/express-routes.adapter';
import { CreateUserControllerFactory } from '../factories/CreateUserControllerFactory';

const router = Router();

const createUserController = CreateUserControllerFactory.make();

router.post('/', ExpressRoutesAdapter.adapt(createUserController));

export default router;