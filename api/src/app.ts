import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './router';

export const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(router);