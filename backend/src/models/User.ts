import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  cpf: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    // USERNAME === CPF
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: String, default: 100000 },
  },
  {
    timestamps: true,
  },
);

const User: Model<IUser> = model('User', UserSchema);

export default User;
