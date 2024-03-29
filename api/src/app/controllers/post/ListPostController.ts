import {Request, Response} from 'express';
import { listPostService } from '../../services/post/ListPostService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';

class ListPostController {
	async handle(req: Request, res: Response){
		const profile = await getUserByIdService.execute(req.user_id)
			.then(user => user.profile);
		const postList = await listPostService.execute(profile);
		res.status(200).json(postList);
	}
}

export const listPostController  = new ListPostController();