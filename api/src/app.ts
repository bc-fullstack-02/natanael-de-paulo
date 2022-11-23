import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { routes } from './app/routers';
import { ConnectDb } from './app/database';

export const app = express();

// CORS allow resource sharing between different origins on each request
app.use(cors());

// adding Helmet to improve HTTP headers security
app.use(helmet());
app.use(express.json());
app.use(routes);

// connect db
app.use((req, res, next) => ConnectDb
	.then(() => next())
	.catch(err => next(err)));