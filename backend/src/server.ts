// Environment
import dotenv from 'dotenv';
dotenv.config();

// Database
import './database/connection';

// Express
import express from 'express';

const app = express();

app.listen(process.env.PORT || 8080, () => console.log('Hello World.'));
