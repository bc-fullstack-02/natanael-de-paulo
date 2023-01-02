import {Request, Response} from 'express';
import { FollowAndUnfollowProfileService } from '../../services/profile/FollowAndUnfollowProfileService';


class FollowAndUnfollowProfileController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const { profile_id } = req.params;

		const followAndUnfollowProfileService = new FollowAndUnfollowProfileService();
		const followProfile = await followAndUnfollowProfileService.execute({user_id, profile_id});

		res.json(followProfile);
	}
}

export const followAndUnfollowProfileController = new FollowAndUnfollowProfileController();