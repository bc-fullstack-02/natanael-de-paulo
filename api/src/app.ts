import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
// import helmet from 'helmet';
import { routes } from './app/routers';
import { ConnectDb } from './app/database';
import { AppError } from './app/shared/middlewares/AppError';

import swaggerDosc from './swagger.json';
import { pub } from './app/shared/middlewares/pubsub';
const app = express();

dotenv.config();
// CORS allow resource sharing between different origins on each request
app.use(cors());

// adding Helmet to improve HTTP headers security
// app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(pub);

app.use('/v1', routes);
app.use(AppError);

// connect db
app.use((req, res, next) => ConnectDb
	.then(() => next())
	.catch(err => next(err)));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDosc));

app.get('/terms', (req, res) => {
	return res.json({
		message: 'Termos de Serviço'
	});
});

export { app };