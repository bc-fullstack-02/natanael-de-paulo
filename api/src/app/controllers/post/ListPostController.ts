import {Request, Response} from 'express';
import { Profile } from '../../models/Profile';
import { ListPostService } from '../../services/post/ListPostService';

class ListPostController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;	
		const listPostService = new ListPostService();
		
		const postList = await listPostService.execute(user_id);
		
		res.json(postList);
	}
}

export const listPostController  = new ListPostController();