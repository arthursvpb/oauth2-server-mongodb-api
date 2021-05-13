import { Router } from 'express';

import TransactionController from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.post('/debit', TransactionController.newDebitOperation);
transactionRouter.post('/credit', TransactionController.newCreditOperation);
transactionRouter.get('/history', TransactionController.showHistory);

export default transactionRouter;
