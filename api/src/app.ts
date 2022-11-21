import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { routes } from './app/routers';
import { ConnectDb } from './app/database';

export const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);
app.use((req, res, next) => ConnectDb
	.then(() => next())
	.catch(err => next(err)));