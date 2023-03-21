import {Request, Response} from 'express';
import { DeletePostService } from '../../services/post/DeletePostService';

class DeletePostController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const { post_id } = req.params;
		
		const deletePostService = new DeletePostService();
		const post = await deletePostService.execute({user_id, post_id});

		res.json(post);
	}
}

export const deletePostController = new DeletePostController();