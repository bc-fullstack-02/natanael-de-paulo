import { Request, Response } from 'express';
import { Post } from '../../models/Post';
import { CreateCommentService } from '../../services/comment/CreateCommentService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class CreateCommentController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const { post_id } = req.params;
		const { description } = req.body;
		const createCommentService  = new CreateCommentService();

		const post = await Post.findById(post_id);
		if(!post) throw new BadRequestException('Post Not Found!');
		if(!description) return res.status(400).json({ error: 'Description is required!'});
		
		const newComment = await createCommentService.execute({user_id, post_id, description});
		await req.publish('comment', [post.profile], newComment);

		res.status(201).json(newComment);
	}
}

export const createCommentController = new CreateCommentController();