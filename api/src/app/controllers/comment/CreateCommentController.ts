import { Request, Response } from 'express';
import { CreateCommentService } from '../../services/comment/CreateCommentService';

class CreateCommentController {
	async handle(req: Request, res: Response){
		const { postId, } = req.params;
		const { description, user_id } = req.body;
		const createCommentService  = new CreateCommentService();

	
		if(!description) return res.status(400).json({ error: 'Description is required!'});
		
		const newComment = await createCommentService.execute({postId, description, user_id}); 
		res.status(201).json(newComment);
	}
}

export const createCommentController = new CreateCommentController();