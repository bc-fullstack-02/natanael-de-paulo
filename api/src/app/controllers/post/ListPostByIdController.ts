import {Request, Response} from 'express';
import { listPostByIdService } from '../../services/post/ListPostByIdService';

class ListPostByIdController {
	async handle(req: Request, res: Response){
		const post = await listPostByIdService.execute( req.params.post_id );
		res.status(200).json(post);
	}
}

export const listPostByIdController = new ListPostByIdController();