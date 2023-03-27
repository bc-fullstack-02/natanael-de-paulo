import { postRepository } from '../../repository/PostRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';
import { PostByIdType } from '../../shared/types/PostTypes';

class ListPostByIdService {
	async execute(post_id: PostByIdType) { 
		const post = await postRepository.getById(post_id);
		if (!post) {
			throw new BadRequestException('Post not found', 404);
		}
		return post;
	}
}

export const listPostByIdService = new ListPostByIdService();