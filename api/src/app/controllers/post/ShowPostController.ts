import {Request, Response} from 'express';
import { ShowPostService } from '../../services/post/ShowPostService';

class ShowPostController {
	async handle(req: Request, res: Response){
		const { _id } = req.params;
		console.log('id',_id);
		
		const showPostService = new ShowPostService();
		const post = await showPostService.execute( _id );

		res.json(post);
	}
}

export { ShowPostController };