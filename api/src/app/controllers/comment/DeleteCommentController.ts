import { Request, Response } from 'express';
import { deleteCommentService } from '../../services/comment/DeleteCommentService';
import { updateCommentsToPostService } from '../../services/comment/UpdateCommentsToPostService';
import { validadeCommentBody } from '../../shared/utils/validators/ValidadeCommentBody';

class DeleteCommentController {
	async handle(req: Request, res: Response){
		const { post_id, comment_id } = req.params;
		await validadeCommentBody.fields(post_id, comment_id);
		
		await Promise.all([
			await deleteCommentService.execute({post_id, comment_id}),
			await updateCommentsToPostService.remove(post_id, comment_id)
		]);

		res.status(200).json('comment deleted successfully');
	}
}

export const deleteCommentController = new DeleteCommentController();