import { Router } from 'express';
import { followAndUnfollowProfileController } from '../controllers/profile/followAndUnfollowProfileController';
import { listProfileController } from '../controllers/profile/ListProfileController';
import { searchProfileController } from '../controllers/profile/SearchProfileController';

export const ProfileRoutes = Router();

ProfileRoutes
	.get('/', listProfileController.handle )
	.get('/search' , searchProfileController.handle);

ProfileRoutes
	.route('/:profile_id/follow')
	.post( followAndUnfollowProfileController.handle );

