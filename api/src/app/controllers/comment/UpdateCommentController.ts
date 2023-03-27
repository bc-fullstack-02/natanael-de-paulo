import { Request, Response } from 'express';
import { listCommentByIdService } from '../../services/comment/ListCommentByIdService';
import { updateCommentService } from '../../services/comment/UpdateCommentService';
import { validateCommentBody } from '../../shared/utils/validators/ValidateCommentBody';
import { validateParams } from '../../shared/utils/validators/ValidateParams';

class UpdateCommentController {
	async handle(req: Request, res: Response){
		await Promise.all([
			validateParams.postId(req.params.post_id),
			validateParams.commentId(req.params.comment_id),
			validateCommentBody.field(req.body.description)
		]);

		const comment = await listCommentByIdService.execute(req.params.comment_id);
		const commentUpdated = await updateCommentService.execute(comment._id, req.body.description); 
		res.status(200).json(commentUpdated);
	}
}

export const updateCommentController = new UpdateCommentController();