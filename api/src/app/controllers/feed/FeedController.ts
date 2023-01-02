import {Request, Response} from 'express';
import { FeedService } from '../../services/feed/FeedService';


class FeedController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		
		const feedService = new FeedService();
		const PostsFriends = await feedService.execute(user_id);
		
		res.json(PostsFriends);
	}
}

export const feedController  = new FeedController();