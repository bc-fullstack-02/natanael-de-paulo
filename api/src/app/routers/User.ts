import { Router } from 'express';
import { createUserController } from '../controllers/user/CreateUserController';

export const UserRoutes = Router();

UserRoutes
	.post('/users', createUserController.handle );