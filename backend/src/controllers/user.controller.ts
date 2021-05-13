import User from '../models/User';
import { Request, Response } from 'express';

import { hash } from 'bcryptjs';

const UserController = {
  async index(req: Request, res: Response) {
    try {
      const users = await User.find();

      console.log(req.headers.loggedUser);

      return res.status(200).json(users);
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },

  async create(req: Request, res: Response) {
    const { body } = req;

    const hashedPassword = await hash(body.password, 8);

    const user = { ...body, password: hashedPassword };

    try {
      await User.create(user);

      delete user.password;

      return res.status(200).json({
        message: `✅ User created successfully!`,
        data: user,
      });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },
  async show(req: Request, res: Response) {
    const { loggedUser } = req.headers;

    try {
      const user = await User.findOne({ username: loggedUser }).lean();

      // @ts-ignore
      delete user.password;

      return res.status(200).json({ data: user });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },
};

export default UserController;
