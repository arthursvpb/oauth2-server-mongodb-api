import { Router } from 'express';

import usersRouter from './users.routes';

import { obtainToken } from '../auth/auth';

const routes = Router();

// Auth
routes.all('/api/auth', obtainToken);
routes.get('/', (req, res) => res.send('Hello World!'));

// Routes
routes.use('/users', usersRouter);

export default routes;
