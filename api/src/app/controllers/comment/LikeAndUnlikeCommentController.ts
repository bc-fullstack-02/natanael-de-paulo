import {Request, Response} from 'express';
import { Types } from 'mongoose';
import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';
import { User } from '../../models/User';
import { LikeAndUnlikeCommentService } from '../../services/comment/LikeAndUnlikeCommentService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class LikeAndUnlikeCommentController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;
		const user_id = req.user_id;
		const user = await User.findById(user_id).populate('profile');
		const post = await Post.findById(post_id);
		const comment = await Comment.findById(comment_id).where('post').equals(post_id);
		const likeAndUnlikeCommentService = new LikeAndUnlikeCommentService();
		
		if(!post || !comment) throw new BadRequestException('Post or Comment Not Found!');
		
		
		if(!comment?.likes.includes(user?.profile._id as Types.ObjectId)){
			const commentLiked = await likeAndUnlikeCommentService.like({comment, user});
			await req.publish('comment-like', [comment?.profile], commentLiked);
			return res.json(commentLiked);
		}

	
		const commentUnliked = await likeAndUnlikeCommentService.unlike({comment, user});
		return res.json(commentUnliked);
	}
}

export const likeAndUnlikeCommentController = new LikeAndUnlikeCommentController();