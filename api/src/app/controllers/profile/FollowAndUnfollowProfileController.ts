import {Request, Response} from 'express';
import { FollowAndUnfollowProfileService } from '../../services/profile/FollowAndUnfollowProfileService';


class FollowAndUnfollowProfileController {
	async handle(req: Request, res: Response){
		const { profile_id } = req.params;
		const user_id = req.user_id;

		const followAndUnfollowProfileService = new FollowAndUnfollowProfileService();
		const postLiked = await followAndUnfollowProfileService.execute({user_id, profile_id});

		res.json(postLiked);
	}
}

export const followAndUnfollowProfileController = new FollowAndUnfollowProfileController();