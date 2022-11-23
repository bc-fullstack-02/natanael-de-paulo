import {Request, Response} from 'express';
import { ShowPostService } from '../../services/post/ShowPostService';

class ShowPostController {
	async handle(req: Request, res: Response){
		const { id } = req.params;
		console.log('id',id);
		
		const showPostService = new ShowPostService();
		const post = await showPostService.execute( id );

		res.json(post);
	}
}

export { ShowPostController };