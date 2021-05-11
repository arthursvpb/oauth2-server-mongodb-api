import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (req, res) => res.send({ message: 'Hello from users' }));

export default usersRouter;
