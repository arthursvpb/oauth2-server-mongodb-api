import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  cpf: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const User: Model<IUser> = model('User', UserSchema);

export default User;
