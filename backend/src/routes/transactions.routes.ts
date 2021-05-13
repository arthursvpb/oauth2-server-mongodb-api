import { Router } from 'express';

import TransactionController from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.post('/debit', TransactionController.newDebitOperation);
transactionRouter.post('/credit', TransactionController.newCreditOperation);

export default transactionRouter;
