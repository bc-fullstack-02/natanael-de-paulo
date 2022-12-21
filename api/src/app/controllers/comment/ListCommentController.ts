import {Request, Response} from 'express';
import { Post } from '../../models/Post';
import { ListCommentService } from '../../services/comment/ListCommentService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class ListCommentController {
	async handle(req: Request, res: Response){
		const { post_id } = req.params;

		const existPost = await Post.findById(post_id);

		if(!existPost) throw new BadRequestException('Post Not Found!');

		const listCommentService = new ListCommentService();	
		
		const commentList = await listCommentService.execute(post_id);
		res.json(commentList);
	}
}

export const listCommentController  = new ListCommentController();