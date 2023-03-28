import {Request, Response} from 'express';
import { feedService } from '../../services/feed/FeedService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';

class FeedController {
	async handle(req: Request, res: Response){
		const profile = await getUserByIdService.execute(req.user_id).then((user) =>	user.profile);
		const postsFriends = await feedService.execute(profile);
		res.json(postsFriends);
	}
}

export const feedController  = new FeedController();