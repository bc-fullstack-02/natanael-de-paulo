import { Request, Response } from 'express';
import { CreatePostService } from '../../services/post/CreatePostService';

class CreatePostController {
	async handle(req: Request, res: Response){
		try {
			const { title, description } = req.body;
			const createPostService  = new CreatePostService();
			
			if(!title) return res.status(400).json({ error: 'Title is required!'});
			
			if(!description) return res.status(400).json({ error: 'Description is required!'});
			
			const newPost = await createPostService.execute( { title, description } );
			return res.json(newPost);
		} catch (error) {
			console.log(error);
			res.status(500);
		}
	}
}

export const createPostController = new CreatePostController(); 