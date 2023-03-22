import {Request, Response} from 'express';
import { deleteAllCommentToPostService } from '../../services/comment/DeleteAllCommentsToPost';
import { deletePostService } from '../../services/post/DeletePostService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { validatePostBody } from '../../shared/utils/validators/ValidadePostBody';

class DeletePostController {
	async handle(req: Request, res: Response){
		await validatePostBody.postId(req.params.post_id);
		const { post_id } = req.params;
		const profile = await getUserByIdService.execute(req.user_id).then(user => user.profile);
		await deleteAllCommentToPostService.execute(post_id);
		await deletePostService.execute({profile, post_id});
		res.status(200).json({msg: 'Post deleted successfully'});
	}
}

export const deletePostController = new DeletePostController();