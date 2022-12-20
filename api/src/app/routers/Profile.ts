import { Router } from 'express';
import { listProfileController } from '../controllers/profile/ListProfileController';
import { searchProfileController } from '../controllers/profile/SearchProfileController';

export const ProfileRoutes = Router();

ProfileRoutes
	.get('/', listProfileController.handle )
	.get('/search' , searchProfileController.handle);

