import {Request, Response} from 'express';
import { Post } from '../../models/Post';
import { LikeAndUnlikeCommentService } from '../../services/comment/LikeAndUnlikeCommentService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class LikeAndUnlikeCommentController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;

		const existPost = await Post.findById(post_id);
		const existComment = existPost?.comments.filter((comment) => String(comment._id) === comment_id);
		
		if(!existPost || !existComment) throw new BadRequestException('Post or Comment Not Found!');

		const likeAndUnlikeCommentService = new LikeAndUnlikeCommentService();
		const commentLiked = await likeAndUnlikeCommentService.execute({ post_id, comment_id });

		res.json(commentLiked);
	}
}

export const likeAndUnlikeCommentController = new LikeAndUnlikeCommentController();