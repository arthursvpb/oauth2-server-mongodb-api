import { model, Schema, Model, Document } from 'mongoose';

interface IToken extends Document {
  accessToken: string;
  accessTokenExpiresAt: Date;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  client: Object;
  user: Object;
}

const TokenSchema: Schema = new Schema({
  accessToken: String,
  accessTokenExpiresAt: Date,
  refreshToken: String,
  refreshTokenExpiresAt: Date,
  client: Object,
  user: Object,
});

const Token: Model<IToken> = model('Token', TokenSchema);

export default Token;
