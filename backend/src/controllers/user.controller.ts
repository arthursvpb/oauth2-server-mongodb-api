import User from '../models/User';
import { Request, Response } from 'express';

const UserController = {
  async index(req: Request, res: Response) {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },

  async create(req: Request, res: Response) {
    const { body } = req;

    try {
      const user = await User.create(body);

      return res.status(200).json({
        message: `✅ User created successfully!`,
        data: user,
      });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },
};

export default UserController;
