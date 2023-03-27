import { Post } from '../models/Post';
import { CreatePostType, DeletePostType, PostByIdType } from '../shared/types/PostTypes';
import { ProfileByIdType } from '../shared/types/ProfileTypes';

class PostRepository {
	async getById(post_id: PostByIdType){
		const query = await Post.findById(post_id);
		return query; 
	}

	async getAll(profile_id: ProfileByIdType){
		const posts = await Post.find({profile: profile_id});
		return posts;
	}

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

	async delete({post_id, profile}: DeletePostType){
		const query = await Post.deleteOne({
			_id: post_id,
			profile: profile._id
		});
		return query;
	}

	async deleteAll(profile_id: ProfileByIdType){
		const query = Post.deleteMany({profile: profile_id});
		return query;
	}
}

export const postRepository = new PostRepository();