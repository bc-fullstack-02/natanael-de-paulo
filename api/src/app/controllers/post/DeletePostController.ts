import {Request, Response} from 'express';
import { DeletePostService } from '../../services/post/DeletePostService';

class DeletePostController {
	async handle(req: Request, res: Response){
		const { id } = req.params;
		console.log('id',id);
		
		const deletePostService = new DeletePostService();
		const post = await deletePostService.execute( id );

		res.json(post);
	}
}

export { DeletePostController };

export const deletePostController = new DeletePostController();