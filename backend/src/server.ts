import dotenv from 'dotenv';
dotenv.config();

import './database/connection';

import express from 'express';
import routes from './routes';
import cors from 'cors';

import { auth, requiresAuth } from 'express-openid-connect';

const app = express();

app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    authRequired: false,
    auth0Logout: true,
  }),
);

// app.use(morgan(method, { ...accessLogConfig }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`✨ Server is running.`),
);
