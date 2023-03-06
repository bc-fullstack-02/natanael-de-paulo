import { Router } from 'express';
import { deleteUserController } from '../controllers/user/DeleteUserController';
import { getUserByIdController } from '../controllers/user/GetUserByIdController';
import { listUsers } from '../controllers/user/ListUsers';
import { updateUserController } from '../controllers/user/UpdateUserControler';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';

export const UserRoutes = Router();

UserRoutes
	.get('/', listUsers.handle)
	.get('/me', isAuthenticated, getUserByIdController.handle)
	.put('/me', isAuthenticated, updateUserController.handle)
	.delete('/me', isAuthenticated, deleteUserController.handle);
	
