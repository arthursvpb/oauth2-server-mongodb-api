import User from '../models/User';
import Client from '../models/Client';
import Token from '../models/Token';

/*
 * Methods used by all grant types.
 */

// @ts-ignore
const getAccessToken = async token => {
  try {
    const accessToken = await Token.findOne({
      accessToken: token,
    }).lean();

    if (!accessToken) {
      console.error('Token not found.');
    }

    return accessToken;
  } catch {
    console.error;
  }
};

// @ts-ignore
const getClient = async (clientId, clientSecret) => {
  try {
    const client = await Client.findOne({
      clientId: clientId,
      clientSecret: clientSecret,
    }).lean();

    if (!client) {
      console.error('Client not found.');
    }

    return client;
  } catch {
    console.error;
  }
};

// @ts-ignore
const saveToken = (token, client, user, callback) => {
  token.client = {
    id: client.clientId,
  };

  token.user = {
    username: user.username,
  };

  const tokenInstance = new Token(token);
  tokenInstance.save(
    // @ts-ignore
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
    console.error;
  }
};

export default {
  getAccessToken: getAccessToken,
  getClient: getClient,
  saveToken: saveToken,
  getUser: getUser,
};
