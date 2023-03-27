import {Request, Response} from 'express';
import { deleteAllCommentToPostService } from '../../services/comment/DeleteAllCommentsToPost';
import { deletePostService } from '../../services/post/DeletePostService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { validateParams } from '../../shared/utils/validators/ValidateParams';

class DeletePostController {
	async handle(req: Request, res: Response){
		const { post_id } = req.params;
		await validateParams.postId(post_id);
		const profile = await getUserByIdService.execute(req.user_id).then(user => user.profile);

		await Promise.all([
			deleteAllCommentToPostService.execute(post_id),
			deletePostService.execute({profile, post_id})
		]);
		
		res.status(200).json({msg: 'Post deleted successfully'});
	}
}

export const deletePostController = new DeletePostController();