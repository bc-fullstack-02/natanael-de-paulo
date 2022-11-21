import { Router } from 'express';
import { PostRoutes } from './post';

export const routes = Router();

routes.use('/posts', PostRoutes);