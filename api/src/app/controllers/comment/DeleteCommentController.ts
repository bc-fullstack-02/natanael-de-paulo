import { Request, Response } from 'express';
import { Post } from '../../models/Post';
import { DeleteCommentService } from '../../services/comment/DeleteCommentService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class DeleteCommentController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;
		const deleteCommentService  = new DeleteCommentService();

		const existPost = await Post.findById(post_id);
		if(!existPost) throw new BadRequestException('Post Not Found!');
		// if(!title) return res.status(400).json({ error: 'Title is required!'});
		// if(!description) return res.status(400).json({ error: 'Description is required!'});
		
		const commentDeleted = await deleteCommentService.execute({post_id, comment_id}); 
		res.status(200).json(commentDeleted);
	}
}

export const deleteCommentController = new DeleteCommentController();