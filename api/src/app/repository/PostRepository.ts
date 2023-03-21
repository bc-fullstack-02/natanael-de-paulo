import { Post } from '../models/Post';
import { CreatePostType } from '../shared/types/PostTypes';
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

	async create({title, description, profile, imagePath}: CreatePostType){
		const query = await Post.create({
			profile: profile._id,
			title: title,
			description: description,
			imagePath: imagePath? imagePath: undefined,
			image: imagePath? true : false
		});

		return query;
	}

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