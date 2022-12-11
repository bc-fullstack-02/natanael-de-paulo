import { Router } from 'express';
import { authUserController } from '../controllers/security/AuthUserController';
import { createUserController } from '../controllers/security/CreateUserController';

export const SecurityRoutes = Router();

SecurityRoutes
	.post('/login', authUserController.handle )
	.post('/register', createUserController.handle );