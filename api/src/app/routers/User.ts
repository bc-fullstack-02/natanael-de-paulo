import { Router } from 'express';
import { detailUserController } from '../controllers/user/DetailUserController';
import { listUsers } from '../controllers/user/ListUsers';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';

export const UserRoutes = Router();

UserRoutes
	.get('/', listUsers.handle)
	.get('/me', isAuthenticated, detailUserController.handle);