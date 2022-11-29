import { Request, Response } from 'express';
import { DeleteCommentService } from '../../services/comment/DeleteCommentService';

class DeleteCommentController {
	async handle(req: Request, res: Response){
		const { postId, id } = req.params;
		const deleteCommentService  = new DeleteCommentService();

		// if(!title) return res.status(400).json({ error: 'Title is required!'});
		// if(!description) return res.status(400).json({ error: 'Description is required!'});
		
		const commentDeleted = await deleteCommentService.execute({postId, id}); 
		res.status(200).json(commentDeleted);
	}
}

export const deleteCommentController = new DeleteCommentController();