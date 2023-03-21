import { Post } from '../models/Post';
import { ProfileByIdType } from '../shared/types/ProfileTypes';

class PostRepository {
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

	// async delete(postId){
	// 	const post = await Post.findByIdAndDelete(postId);
	// 	return post;
	// }

	async deleteAll(profile_id: ProfileByIdType){
		const query = Post.deleteMany({_id: profile_id});
		return query;
	}
}

export const postRepository = new PostRepository();