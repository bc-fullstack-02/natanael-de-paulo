import { Comment } from '../models/Comment';
import { ProfileByIdType } from '../shared/types/ProfileTypes';

class CommentRepository {
	// async getById(postId){
	// 	const post = await Post.findById(postId);
	// 	return post; 
	// }

	// async getAll(){
	// 	const posts = await Post.find({});
	// 	return posts;
	// }

	// async update(postId){
	// 	const post = await Post.findByIdAndUpdate(postId, {});
	// 	return post;
	// }

	async deleteAll(profile_id: ProfileByIdType){
		const query = await Comment.deleteMany({profile: profile_id });
		return query;
	}
}

export const commentRepository = new CommentRepository();