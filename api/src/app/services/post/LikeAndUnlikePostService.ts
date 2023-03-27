import { postRepository } from '../../repository/PostRepository';
import { PostByIdType } from '../../shared/types/PostTypes';
import { ProfileType } from '../../shared/types/ProfileTypes';

class LikePostService {
	async like(post_id: PostByIdType, profile: ProfileType){
		const postLiked =  postRepository.likePost(post_id, profile);
		return postLiked;
	}

	async unlike(post_id: PostByIdType, profile: ProfileType){
		const postUnliked = postRepository.unlikePost(post_id, profile);
		return postUnliked;
	}
}

export const likePostService = new LikePostService();