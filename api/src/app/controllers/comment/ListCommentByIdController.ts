import { Request, Response } from 'express';
import { ListCommentByIdService } from '../../services/comment/ListCommentByIdService';

class ListCommentByIdController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;
		const listCommentByIdService  = new ListCommentByIdService();
		const comment = await listCommentByIdService.execute({post_id, comment_id}); 
    
		res.status(200).json(comment);
	}
}

export const listCommentByIdController = new ListCommentByIdController();

