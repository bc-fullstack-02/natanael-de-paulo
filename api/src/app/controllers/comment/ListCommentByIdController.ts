import { Request, Response } from 'express';
import { listCommentByIdService } from '../../services/comment/ListCommentByIdService';
import { validateParams } from '../../shared/utils/validators/ValidateParams';

class ListCommentByIdController {
	async handle(req: Request, res: Response){
		await Promise.all([
			await validateParams.postId(req.params.post_id),
			await validateParams.commentId(req.params.comment_id)
		]);
		
		const comment = await listCommentByIdService.execute(req.params.comment_id); 
		res.status(200).json(comment);
	}
}

export const listCommentByIdController = new ListCommentByIdController();

