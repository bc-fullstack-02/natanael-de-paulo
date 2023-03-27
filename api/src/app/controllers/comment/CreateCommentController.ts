import { Request, Response } from 'express';
import { createCommentService } from '../../services/comment/CreateCommentService';
import { listPostByIdService } from '../../services/post/ListPostByIdService';
import { updateCommentsToPostService } from '../../services/post/UpdateCommentsToPostService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { validadeCommentBody } from '../../shared/utils/validators/ValidadeCommentBody';

class CreateCommentController {
	async handle(req: Request, res: Response){
		const { description } = req.body;
		validadeCommentBody.create(description);

		const data = await Promise.all([
			getUserByIdService.execute(req.user_id).then(user => user.profile),
			listPostByIdService.execute(req.params.post_id)
		]);

		const [profile, post] = data;
		
		const newComment = await createCommentService.execute({post, profile, description});
		await updateCommentsToPostService.add(post, newComment);
		await req.publish('comment', [post.profile], newComment);

		res.status(201).json(newComment);
	}
}

export const createCommentController = new CreateCommentController();