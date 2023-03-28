import {Request, Response} from 'express';
import { followAndUnfollowProfileService } from '../../services/profile/FollowAndUnfollowProfileService';
import { getProfileByIdService } from '../../services/profile/GetProfileByIdService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';


class FollowAndUnfollowProfileController {
	async handle(req: Request, res: Response){
		const data = await Promise.all([
			getProfileByIdService.execute(req.params.profile_id),
			getUserByIdService.execute(req.user_id).then(user => user.profile)
		]);

		const [ handleProfile, profileLogged ] = data;
		const followProfile = await followAndUnfollowProfileService.execute(handleProfile, profileLogged);
		res.json(followProfile);
	}
}

export const followAndUnfollowProfileController = new FollowAndUnfollowProfileController();