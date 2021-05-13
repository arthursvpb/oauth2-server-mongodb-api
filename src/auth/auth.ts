import express from 'express';
import { Request, Response } from 'oauth2-server';

import OAuth2Server from 'oauth2-server';
import authMethods from '../auth/methods.auth';

const app = express();

app.oauth = new OAuth2Server({
  // @ts-ignore
  model: authMethods,
  accessTokenLifetime: 60 * 60,
  allowBearerTokensInQueryString: true,
});

const publicPaths = ['/', '/api/auth'];

// @ts-ignore
export async function authenticateRequest(req, res, next) {
  const { url, method } = req;

  if (publicPaths.includes(url) || (url === '/users' && method === 'POST')) {
    return next();
  }

  const request = new Request(req);
  const response = new Response(res);

  try {
    const { user } = await app.oauth.authenticate(request, response);

    req.headers.loggedUser = user.username;

    return next();
  } catch ({ message }) {
    return res.status(401).json({ message });
  }
}

// @ts-ignore
export async function obtainToken(req, res) {
  const request = new Request(req);
  const response = new Response(res);

  try {
    const token = await app.oauth.token(request, response);

    return res.send(token);
  } catch ({ message }) {
    return res.status(401).json({ message });
  }
}
