import { postRepository } from '../../repository/PostRepository';
import { ProfileType } from '../../shared/types/ProfileTypes';

class ListPostService {
	async execute(profile: ProfileType) {
		const post = await postRepository.getAll(profile._id);
		return post;
	}
}

export const listPostService = new ListPostService();