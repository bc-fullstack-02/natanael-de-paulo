import { Post } from '../models/Post';

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
}

export const postRepository = new PostRepository();