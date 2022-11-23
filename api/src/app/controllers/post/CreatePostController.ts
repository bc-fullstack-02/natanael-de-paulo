import { Request, Response } from 'express';
import { CreatePostService } from '../../services/post/CreatePostService';

class CreatePostController {
	async handle(req: Request, res: Response){
		try {
			const { title, description } = req.body;
			const createPostService  = new CreatePostService();
			
			if(!title) throw new Error('Title is required!');
			if(!description) throw new Error('Description is required!');
			
			const newPost = await createPostService.execute( { title, description } );
			res.json(newPost);
			res.redirect(`v1/posts/new/:${newPost?._id}`);
		} catch (error) {
			console.log(error);
			res.status(500);
			return res.end();
		}
	}
}

export const createPostController = new CreatePostController(); 