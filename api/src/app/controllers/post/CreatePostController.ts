import { Request, Response } from 'express';
import { createPostService } from '../../services/post/CreatePostService';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { CreatePostType } from '../../shared/types/PostTypes';
import { validatePostBody } from '../../shared/utils/validators/ValidatePostBody';

class CreatePostController {
	async handle(req: Request, res: Response) {
		validatePostBody.create(req.body);
		const {title, description, imageUrl, image} = req.body as CreatePostType;
		// const imagePath = req.file?.filename;
		const profile = await getUserByIdService.execute(req.user_id).then(user => user.profile);
		const newPost = await createPostService.execute({
			title, 
			description, 
			profile, 
			imageUrl,
			image
		});
		await req.publish('post_pub', profile?.followers, newPost);
		res.status(201).json(newPost);
	}
}

export const createPostController = new CreatePostController();