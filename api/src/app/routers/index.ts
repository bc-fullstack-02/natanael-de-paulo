import { Router } from 'express';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';
import { CommentRouters } from './Comment';
import { PostRoutes } from './Post';
import { SecurityRoutes } from './Security';
import { UserRoutes } from './User';

export const routes = Router();

routes.use('/security', SecurityRoutes);
routes.use('/users', isAuthenticated,  UserRoutes);
routes.use('/posts', isAuthenticated, PostRoutes);
routes.use('/comments', isAuthenticated, CommentRouters);