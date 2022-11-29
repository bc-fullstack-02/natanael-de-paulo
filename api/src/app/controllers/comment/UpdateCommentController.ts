import { Request, Response } from 'express';
import { UpdateCommentService } from '../../services/comment/UpdateCommentService';


class UpdateCommentController {
	async handle(req: Request, res: Response){
		const { postId, id } = req.params;
		const { description }  = req.body;

		const updateCommentService  = new UpdateCommentService();
		const commentUpdated = await updateCommentService.execute({postId, id, description}); 
		res.status(200).json(commentUpdated);
	}
}

export const updateCommentController = new UpdateCommentController();