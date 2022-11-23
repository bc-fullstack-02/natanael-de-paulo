import { Router } from 'express';
import { PostRoutes } from './Post';

export const routes = Router();

routes.use('/v1', PostRoutes);

