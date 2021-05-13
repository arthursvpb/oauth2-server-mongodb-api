import dotenv from 'dotenv';
dotenv.config();

import './database/connection';

import express from 'express';
import routes from './routes';
import cors from 'cors';

import { authenticateRequest } from './auth/auth';

import loadExampleData from './debug/loadExampleData';

const app = express();

// app.use(morgan(method, { ...accessLogConfig }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

loadExampleData();

app.use(authenticateRequest);
app.use(routes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`✨ Server is running.`),
);

export default app;
