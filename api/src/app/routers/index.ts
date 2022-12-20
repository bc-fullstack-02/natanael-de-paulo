import { Router } from 'express';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';
import { CommentRouters } from './Comment';
import { PostRoutes } from './Post';
import { ProfileRoutes } from './Profile';
import { SecurityRoutes } from './Security';
import { UserRoutes } from './User';

export const routes = Router();

PostRoutes.use('/', isAuthenticated, CommentRouters);
routes.use('/posts', isAuthenticated, PostRoutes);
routes.use('/users',isAuthenticated, UserRoutes);
routes.use('/profiles', isAuthenticated, ProfileRoutes);
routes.use('/security', SecurityRoutes);