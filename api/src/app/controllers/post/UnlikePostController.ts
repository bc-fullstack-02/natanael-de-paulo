import {Request, Response} from 'express';
import { LikePostService } from '../../services/post/LikePostService';
import { UnlikePostService } from '../../services/post/UnlikePostService';

class UnlikePostController {
	async handle(req: Request, res: Response){
		const { post_id } = req.params;
		const user_id = req.user_id;
		
		const unlikePostService = new UnlikePostService();
		const postLiked = await unlikePostService.execute({ post_id, user_id });
		
		res.json(postLiked);
	}
}

export const unlikePostController = new UnlikePostController();