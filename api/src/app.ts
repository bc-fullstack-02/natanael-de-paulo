import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import cors from 'cors';
// import helmet from 'helmet';
import morgan from 'morgan';
import { routes } from './app/routers';
import { ConnectDb } from './app/database';
import { AppError } from './app/shared/middlewares/AppError';
import swaggerUi from 'swagger-ui-express';
import swaggerDosc from './swagger.json';
import { messageBroker } from './app/shared/lib/messageBroker';
import { socketAuth } from './app/shared/middlewares/socketAuth';

const app = express();
dotenv.config();

app.use((req, res, next) => ConnectDb
	.then(() => next())
	.catch(err => next(err)));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDosc));

app.use(express.json());
app.use(cors());
// app.use(helmet());
app.use(morgan('tiny'));
app.use(messageBroker.pub);


const urlencodedMiddleware =  express.urlencoded({extended: true});
app.use((req, res, next) => (/^multipart\//i.test(String(req.get('Content-Type')))) ? next() : urlencodedMiddleware(req, res, next));


app.use(AppError);
app.use('/v1', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/terms', (req, res) => {
	return res.json({
		message: 'Termos de Serviço'
	});
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	}
});

const liveData = io.of('/v1');

liveData.use(socketAuth);

export { httpServer, liveData };