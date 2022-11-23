import {Request, Response} from 'express';
import { ListPostByIdService } from '../../services/post/ListPostByIdService';




class ListPostByIdController {
	async handle(req: Request, res: Response){
		const { id } = req.params;
		
		const listPostByIdService = new ListPostByIdService();
		const post = await listPostByIdService.execute( id );
		

		

		res.json(post);
	}
}

export const listPostByIdController = new ListPostByIdController();