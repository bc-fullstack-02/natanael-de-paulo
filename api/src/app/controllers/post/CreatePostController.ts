import { Request, Response } from 'express';
import { Profile } from '../../models/Profile';
import { CreatePostService } from '../../services/post/CreatePostService';

class CreatePostController {
	async handle(req: Request, res: Response){
		const user_id  = req.user_id;
		const { title, description } = req.body;
		const createPostService  = new CreatePostService();
		const profile = await Profile.findOne({ user: user_id });

		if(!title) return res.status(400).json({ error: 'Title is required!'});
		if(!description) return res.status(400).json({ error: 'Description is required!'});
		
		const newPost = await createPostService.execute({title, description, user_id});
		await req.publish('post', profile?.followers, newPost);
		
		res.status(201).json(newPost);
	}
}

export const createPostController = new CreatePostController();