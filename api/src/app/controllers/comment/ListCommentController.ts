import {Request, Response} from 'express';
import { ListCommentService } from '../../services/comment/ListCommentService';

class ListCommentController {
	async handle(req: Request, res: Response){
		const { postId } = req.params;

		const listCommentService = new ListCommentService();
		
		const commentList = await listCommentService.execute(postId);
		
		res.json(commentList);
	}
}

export const listCommentController  = new ListCommentController();