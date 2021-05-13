import User from '../models/User';
import { Request, Response } from 'express';

const TransactionController = {
  async newCreditOperation(req: Request, res: Response) {
    const { loggedUser } = req.headers;
    const amount = Number(req.body.amount);

    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: `The amount can't be negative or zero.` });
    }

    try {
      const user = await User.findOne({ username: loggedUser });

      if (!user) {
        return res.status(400).json({ message: 'You are not logged in.' });
      }

      if (user.limit > 0 && user.limit >= amount) {
        user.limit -= amount;
        user.invoice += amount;

        user.history.push({
          transactionDate: Date.now(),
          amount: amount,
          transactionType: 'CREDIT',
        });

        await user.save();
      } else {
        return res
          .status(400)
          .json({ message: 'Insufficient credit limit! =(' });
      }

      return res.status(400).json({ message: 'Credit operation successful.' });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },

  async newDebitOperation(req: Request, res: Response) {
    const { loggedUser } = req.headers;
    const amount = Number(req.body.amount);

    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: `The amount can't be negative or zero.` });
    }

    try {
      const user = await User.findOne({ username: loggedUser });

      if (!user) {
        return res.status(400).json({ message: 'You are not logged in.' });
      }

      if (user.balance > 0 && user.balance >= amount) {
        user.balance -= amount;

        user.history.push({
          transactionDate: Date.now(),
          amount: amount,
          transactionType: 'DEBIT',
        });

        await user.save();
      } else {
        return res.status(400).json({ message: 'Insufficient money! =(' });
      }

      return res.status(400).json({ message: 'Debit operation successful.' });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },

  async showHistory(req: Request, res: Response) {
    try {
      // return res.status(200).json(users);
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  },
};

export default TransactionController;
