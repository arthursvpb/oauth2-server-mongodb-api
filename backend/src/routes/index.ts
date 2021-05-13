import { Router } from 'express';

import usersRouter from './users.routes';
import transactionsRouter from './transactions.routes';

import { obtainToken } from '../auth/auth';

const routes = Router();

// Auth
routes.all('/api/auth', obtainToken);
routes.get('/', (req, res) => res.send('Hello World!'));

// Routes
routes.use('/users', usersRouter);
routes.use('/transactions', transactionsRouter);

export default routes;
