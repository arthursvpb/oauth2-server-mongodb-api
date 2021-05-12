import User from '../models/User';
import Client from '../models/Client';
import Token from '../models/Token';

/*
 * Methods used by all grant types.
 */

const getAccessToken = (token, callback) => {
  Token.findOne({
    accessToken: token,
  })
    .lean()
    .exec(
      function (callback, err, token) {
        if (!token) {
          console.error('Token not found.');
        }

        callback(err, token);
      }.bind(null, callback),
    );
};

const getClient = function (clientId, clientSecret, callback) {
  Client.findOne({
    clientId: clientId,
    clientSecret: clientSecret,
  })
    .lean()
    .exec(
      function (callback, err, client) {
        if (!client) {
          console.error('Client not found.');
        }

        callback(err, client);
      }.bind(null, callback),
    );
};

const saveToken = function (token, client, user, callback) {
  token.client = {
    id: client.clientId,
  };

  token.user = {
    username: user.username,
  };

  const tokenInstance = new Token(token);
  tokenInstance.save(
    function (callback, err, token) {
      if (!token) {
        console.error('Token not saved');
      } else {
        token = token.toObject();
        delete token._id;
        delete token.__v;
      }

      callback(err, token);
    }.bind(null, callback),
  );
};

/*
 * Method used only by password grant type.
 */

const getUser = async (username: string, password: string) => {
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    }).lean();

    return user;
  } catch {
    console.log;
  }
};

export default {
  getAccessToken: getAccessToken,
  getClient: getClient,
  saveToken: saveToken,
  getUser: getUser,
};
