import {Request, Response} from 'express';
import { ListPostService } from '../../services/post/ListPostService';

class ListPostController {
	async handle(req: Request, res: Response){
		const listPostService = new ListPostService();
		
		const postList = await listPostService.execute();
		
		res.json(postList);
	}
}

export const listPostController  = new ListPostController();