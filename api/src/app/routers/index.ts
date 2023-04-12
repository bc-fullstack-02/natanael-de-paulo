import { Router } from 'express';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';
import { CommentRouters } from './Comment';
import { FeedRoute } from './Feed';

import { UserRoutes } from './User';
import { ProfileRoutes } from './Profile';
import { SecurityRoutes } from './Security';
import { PostRoutes } from './Post';

export const routes = Router();

PostRoutes.use('/', CommentRouters);
routes.use('/posts', isAuthenticated, PostRoutes);
routes.use('/users', isAuthenticated, UserRoutes);
routes.use('/profiles', isAuthenticated, ProfileRoutes);
routes.use('/security', SecurityRoutes);
routes.use('/feed', isAuthenticated, FeedRoute );