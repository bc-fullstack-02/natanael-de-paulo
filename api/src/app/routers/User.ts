import { Router } from 'express';
import { deleteUserController } from '../controllers/user/DeleteUserController';
import { detailUserController } from '../controllers/user/DetailUserController';
import { listUsers } from '../controllers/user/ListUsers';
import { myFollowersController } from '../controllers/user/MyFollowersController';
import { updateUserController } from '../controllers/user/UpdateUserControler';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';

export const UserRoutes = Router();

UserRoutes
	.get('/', listUsers.handle)
	.get('/me', isAuthenticated, detailUserController.handle)
	.get('/me/myfollowers', myFollowersController.handle)
	.put('/me', isAuthenticated, updateUserController.handle)
	.delete('/me', isAuthenticated, deleteUserController.handle);
	
