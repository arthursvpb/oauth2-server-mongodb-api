import { model, Schema, Model, Document } from 'mongoose';

interface IClient extends Document {
  id: string;
  clientId: string;
  clientSecret: string;
  grants: Array<string>;
  redirectUris: Array<string>;
}

const ClientSchema: Schema = new Schema({
  id: String,
  clientId: String,
  clientSecret: String,
  grants: [String],
  redirectUris: [String],
});

const Client: Model<IClient> = model('Client', ClientSchema);

export default Client;
