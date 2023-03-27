import { Request, Response } from 'express';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { updatePostService } from '../../services/post/UpdatePostService';

class UpdatePostController {
	async handle(req: Request, res: Response){
		const { post_id } = req.params;
		const { title, description } = req.body;
		const profile = await getUserByIdService.execute(req.user_id).then(user => user.profile);
		const post = await updatePostService.execute({ profile, post_id, title, description});
		
		res.json(post);
	}
}

export const updatePostController = new UpdatePostController();