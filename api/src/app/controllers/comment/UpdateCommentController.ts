import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { Post } from '../../models/Post';
import { UpdateCommentService } from '../../services/comment/UpdateCommentService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class UpdateCommentController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;
		const { description }  = req.body;

		const existPost = await Post.findById(post_id);
		const existComment = existPost?.comments.filter((comment) => String(comment._id) === comment_id);
		if(!existPost || !existComment) throw new BadRequestException('Post or Comment Not Found!');
		const updateCommentService  = new UpdateCommentService();
		const commentUpdated = await updateCommentService.execute({post_id, comment_id, description}); 
		res.status(200).json(commentUpdated);
	}
}

export const updateCommentController = new UpdateCommentController();