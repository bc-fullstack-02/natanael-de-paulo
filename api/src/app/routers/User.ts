import { Router } from 'express';
import { deleteUserController } from '../controllers/user/DeleteUserController';
import { detailProfileUserController } from '../controllers/user/DetailProfileUserController';
import { listUsers } from '../controllers/user/ListUsers';
import { updateUserController } from '../controllers/user/UpdateUserControler';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';

export const UserRoutes = Router();

UserRoutes
	.get('/', listUsers.handle)
	.get('/me', isAuthenticated, detailProfileUserController.handle)
	.put('/me', isAuthenticated, updateUserController.handle)
	.delete('/me', isAuthenticated, deleteUserController.handle);