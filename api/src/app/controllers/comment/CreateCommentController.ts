import { Request, Response } from 'express';
import { CreateCommentService } from '../../services/comment/CreateCommentService';

class CreateCommentController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const { post_id } = req.params;
		const { description } = req.body;
		const createCommentService  = new CreateCommentService();

		if(!description) return res.status(400).json({ error: 'Description is required!'});
		
		const newComment = await createCommentService.execute({user_id, post_id, description}); 
		res.status(201).json(newComment);
	}
}

export const createCommentController = new CreateCommentController();