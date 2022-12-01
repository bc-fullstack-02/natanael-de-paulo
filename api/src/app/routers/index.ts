import { Router } from 'express';
import { CommentRouters } from './Comment';
import { PostRoutes } from './Post';
import { UserRoutes } from './User';

export const routes = Router();

routes.use('/v1', PostRoutes);
routes.use('/v1', CommentRouters);
routes.use('/v1', UserRoutes);