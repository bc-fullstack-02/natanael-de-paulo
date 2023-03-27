import {Request, Response} from 'express';
import { Types } from 'mongoose';
import { likePostService } from '../../services/post/LikeAndUnlikePostService';
import { listPostByIdService } from '../../services/post/ListPostByIdService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';

class LikeAndUnlikePostController {
	async handle(req: Request, res: Response){
		const data = await Promise.all([
			listPostByIdService.execute(req.params.post_id),
			getUserByIdService.execute(req.user_id).then(user => user.profile)
		]);

		const [post, profile] = data;

		if(!post?.likes.includes(profile._id as Types.ObjectId)) {
			const postLiked = await likePostService.like(post._id, profile);
			await req.publish('comment-like', [post?.profile], postLiked);
			return res.json(postLiked);
		}

		const postUnliked = await likePostService.unlike(post._id, profile);
		return res.json(postUnliked);
	}
}

export const likeAndUnlikePostController = new LikeAndUnlikePostController();