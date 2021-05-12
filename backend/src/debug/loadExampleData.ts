import Client from '../models/Client';
import User from '../models/User';

export default function () {
  const client = new Client({
    // id: 'application',
    clientId: 'client_id',
    clientSecret: 'client_secret',
    grants: ['password', 'client_credentials'],
    redirectUris: [],
  });

  const user = new User({
    username: '41',
    name: 'test',
    password: 'test',
  });

  client.save(function (err, client) {
    if (err) {
      return console.error(err);
    }
    console.log('Created client', client);
  });

  user.save(function (err, user) {
    if (err) {
      return console.error(err);
    }
    console.log('Created user', user);
  });
}
