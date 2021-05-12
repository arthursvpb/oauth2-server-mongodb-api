import dotenv from 'dotenv';
dotenv.config();

import './database/connection';

import express from 'express';
import routes from './routes';
import cors from 'cors';
import OAuth2Server, { Request, Response } from 'oauth2-server';
import authMethods from './auth/methods.auth';

import loadExampleData from './debug/loadExampleData';

const app = express();

// app.use(morgan(method, { ...accessLogConfig }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.oauth = new OAuth2Server({
  // @ts-expect-error
  model: authMethods,
  accessTokenLifetime: 60 * 60,
  allowBearerTokensInQueryString: true,
});

const authenticateRequest = async (req, res, next) => {
  const request = new Request(req);
  const response = new Response(res);

  try {
    await app.oauth.authenticate(request, response);

    return next();
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const obtainToken = async (req, res) => {
  const request = new Request(req);
  const response = new Response(res);

  try {
    const token = await app.oauth.token(request, response);

    return res.send(token);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

loadExampleData();

app.all('/oauth/token', obtainToken);

app.get('/', authenticateRequest, (req, res) => {
  console.log('Granted.');
});

app.use(routes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`✨ Server is running.`),
);
