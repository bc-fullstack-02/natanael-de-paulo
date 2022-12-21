import {Request, Response} from 'express';
import { LikePostService } from '../../services/post/LikePostService';

class LikePostController {
	async handle(req: Request, res: Response){
		const { post_id } = req.params;
		const user_id = req.user_id;
		
		const likePostService = new LikePostService();
		const postLiked = await likePostService.execute({ post_id, user_id });
		
		res.json(postLiked);
	}
}

export const likePostController = new LikePostController();