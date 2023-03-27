import {Request, Response} from 'express';
import { Post } from '../../models/Post';
import { listCommentService } from '../../services/comment/ListCommentService';
import { validateParams } from '../../shared/utils/validators/ValidateParams';

class ListCommentController {
	async handle(req: Request, res: Response){
		await validateParams.postId(req.params.post_id);
		const commentList = await listCommentService.execute(req.params.post_id);
		res.json(commentList);
	}
}

export const listCommentController  = new ListCommentController();