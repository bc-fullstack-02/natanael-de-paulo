import { Request, Response } from 'express';
import { listCommentByIdService } from '../../services/comment/ListCommentByIdService';
import { validadeCommentBody } from '../../shared/utils/validators/ValidadeCommentBody';

class ListCommentByIdController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;
		await validadeCommentBody.fields(post_id, comment_id);
		const comment = await listCommentByIdService.execute(comment_id); 
		res.status(200).json(comment);
	}
}

export const listCommentByIdController = new ListCommentByIdController();

