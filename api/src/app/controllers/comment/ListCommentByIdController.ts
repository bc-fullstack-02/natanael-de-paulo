
import { Request, Response } from 'express';
import { ListCommentByIdService } from '../../services/comment/ListCommentByIdService';

class ListCommentByIdController {
	async handle(req: Request, res: Response){
		const { postId, id } = req.params;
		const listCommentByIdService  = new ListCommentByIdService();
		const comment = await listCommentByIdService.execute({postId, id}); 
    
		res.status(200).json(comment);
	}
}

export const listCommentByIdController = new ListCommentByIdController();

