import { postRepository } from '../../repository/PostRepository';
import { ProfileType } from '../../shared/types/ProfileTypes';

class FeedService {
	async execute(profile: ProfileType){
		const postsFriends = postRepository.getFeed(profile);
		return postsFriends;
	}
}

export const feedService = new FeedService();