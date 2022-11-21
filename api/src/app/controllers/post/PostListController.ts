import {Request, Response} from 'express';
import { PostListService } from '../../services/post/PostListService';

class PostListController{
	async handle(req: Request, res: Response){
		const postListService = new PostListService();
		const postList = await postListService.execute();

		return res.json(postList);
	}
}

export {PostListController};