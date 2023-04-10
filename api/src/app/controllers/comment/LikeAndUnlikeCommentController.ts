import {Request, Response} from 'express';
import { Types } from 'mongoose';
import { likeAndUnlikeCommentService } from '../../services/comment/LikeAndUnlikeCommentService';
import { listCommentByIdService } from '../../services/comment/ListCommentByIdService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';

class LikeAndUnlikeCommentController {
	async handle(req: Request, res: Response){
		const data = await Promise.all([
			listCommentByIdService.execute(req.params.comment_id),
			getUserByIdService.execute(req.user_id).then(user => user.profile)
		]);

		const [comment, profile] = data;
				
		if(!comment?.likes.includes(profile._id as Types.ObjectId)){
			const commentLiked = await likeAndUnlikeCommentService.like(comment, profile);
			await req.publish('like-unlike_pub', [comment?.profile], commentLiked);
			return res.json(commentLiked);
		}

		const commentUnliked = await likeAndUnlikeCommentService.unlike(comment, profile);
		return res.json(commentUnliked);
	}
}

export const likeAndUnlikeCommentController = new LikeAndUnlikeCommentController();