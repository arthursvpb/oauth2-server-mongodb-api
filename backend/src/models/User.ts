import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  cpf: string;
  password: string;
  balance: number;
  limit: number;
  invoice: number;
  history: Array<Object>;
}

const UserSchema: Schema = new Schema(
  {
    // USERNAME === CPF
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 10000.0 },
    limit: { type: Number, default: 15000.0 },
    invoice: { type: Number, default: 0 },
    history: [
      { transactionDate: Date, amount: Number, transactionType: String },
    ],
  },
  {
    timestamps: true,
  },
);

const User: Model<IUser> = model('User', UserSchema);

export default User;
