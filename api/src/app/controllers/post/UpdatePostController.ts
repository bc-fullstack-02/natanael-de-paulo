import {Request, Response} from 'express';
import { UpdatePostService } from '../../services/post/UpdatePostService';

class UpdatePostController {
	async handle(req: Request, res: Response){
		const { id } = req.params;
		const { title, description } = req.body;
		
		const updatePostService = new UpdatePostService();
		const post = await updatePostService.execute( { id, title, description } );
		
		res.json(post);
	}
}

export const updatePostController = new UpdatePostController();