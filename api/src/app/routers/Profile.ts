import { Router } from 'express';
import { followAndUnfollowProfileController } from '../controllers/profile/FollowAndUnfollowProfileController';
import { listProfileController } from '../controllers/profile/ListProfileController';
import { searchProfileController } from '../controllers/profile/SearchProfileController';

export const ProfileRoutes = Router();

ProfileRoutes
	.get('/', listProfileController.handle )
	.get('/search', searchProfileController.handle)
	.post('/:profile_id/follow', followAndUnfollowProfileController.handle );

