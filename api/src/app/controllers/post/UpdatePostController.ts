import {Request, Response} from 'express';
import { UpdatePostService } from '../../services/post/UpdatePostService';

class UpdatePostController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const { post_id } = req.params;
		const { title, description } = req.body;

		const updatePostService = new UpdatePostService();
		const post = await updatePostService.execute( { user_id, post_id, title, description } );
		
		res.json(post);
	}
}

export const updatePostController = new UpdatePostController();