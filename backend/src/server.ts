import dotenv from 'dotenv';
dotenv.config();

import './database/connection';

import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// app.use(morgan(method, { ...accessLogConfig }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`✨ Server is running.`),
);
