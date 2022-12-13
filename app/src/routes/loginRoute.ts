import Router from 'express';
import ExpressRoutesAdapter from '../adapters/express/express-routes.adapter';
import { LoginControllerFactory } from '../factories/LoginControllerFactory';

const router = Router();

const LoginController = LoginControllerFactory.make();

router.post('/', ExpressRoutesAdapter.adapt(LoginController));

export default router;