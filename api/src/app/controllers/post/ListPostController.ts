import {Request, Response} from 'express';
import { ListPostService } from '../../services/post/ListPostService';

class ListPostController {
	async handle(req: Request, res: Response){
		try {
			const listPostService = new ListPostService();
			const postList = await listPostService.execute();
			return res.json(postList);
		} catch (error) {
			console.log(error);
			res.status(500);
		}
	}
}

export const listPostController  = new ListPostController();