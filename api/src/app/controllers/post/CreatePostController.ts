import { Request, Response} from 'express';
import { CreatePostService } from '../../services/post/CreatePostService';

class CreatePostController {
	async handle(req: Request, res: Response){
		const createPostService  = new CreatePostService();
		const newPost = await createPostService.execute(req.body);

		console.log('post', newPost);
		return res.status(201).json(newPost);
	}
}

export { CreatePostController };