import { postRepository } from '../../repository/PostRepository';
import { CreatePostType } from '../../shared/types/PostTypes';

class CreatePostService {
	async execute({ title, description, profile, imageUrl, image }: CreatePostType) {
		const post = await postRepository.create({title, description, profile, imageUrl, image});
		return post;
	}
	//rota de postlike => req.publish('post-like', [args.profile], args)
}

export const createPostService = new CreatePostService();