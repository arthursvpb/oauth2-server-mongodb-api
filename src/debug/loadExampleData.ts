import Client from '../models/Client';

export default function () {
  const client = new Client({
    // id: 'application',
    clientId: 'client_id',
    clientSecret: 'client_secret',
    grants: ['password', 'client_credentials'],
    redirectUris: [],
  });

  client.save(function (err, client) {
    if (err) {
      return console.error(err);
    }
    console.log('Created client', client);
  });
}
