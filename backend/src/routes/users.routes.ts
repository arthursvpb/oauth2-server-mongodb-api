import { Router } from 'express';

import UserController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.get('/', UserController.index);
usersRouter.post('/', UserController.create);
usersRouter.get('/profile', UserController.show);

export default usersRouter;
