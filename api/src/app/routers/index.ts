import { Router } from 'express';
import { CommentRouters } from './Comment';
import { PostRoutes } from './Post';

export const routes = Router();

routes.use('/v1', PostRoutes);
routes.use('/v1', CommentRouters);
