import Router from 'express';
import ExpressRoutesAdapter from '../adapters/express/express-routes.adapter';
import { CreateUserControllerFactory } from '../factories/CreateUserControllerFactory';
import { GetAccountControllerFactory } from '../factories/GetAccountControllerFactory';
import { CreateTransactionControllerFactory } from '../factories/CreateTransactionControllerFactory';
import { AuthMiddleware } from '../middlewares/authMiddleware';

const router = Router();

const createUserController = CreateUserControllerFactory.make();
const getAccountController = GetAccountControllerFactory.make();
const createTransactionController = CreateTransactionControllerFactory.make();

router.post('/', ExpressRoutesAdapter.adapt(createUserController));
router.get('/account/:id', AuthMiddleware, ExpressRoutesAdapter.adapt(getAccountController));
router.post('/transaction', ExpressRoutesAdapter.adapt(createTransactionController));

export default router;
