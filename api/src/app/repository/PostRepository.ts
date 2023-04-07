import { Post } from '../models/Post';
import { CreatePostType, DeletePostType, PostByIdType, PostType, UpdatePostType } from '../shared/types/PostTypes';
import { ProfileByIdType, ProfileType } from '../shared/types/ProfileTypes';

class PostRepository {
	async getById(post_id: PostByIdType){
		const query = await Post.findById(post_id);
		return query; 
	}

	async getAll(profile_id: ProfileByIdType){
		const query: PostType[] = await Post.find({profile: profile_id});
		return query;
	}

	async getFeed(profile: ProfileType){
		const query: PostType[] = await Post.find({profile: { $in:profile?.following}});
		return query;
	}

	async create({title, description, profile, imageUrl, image}: CreatePostType){
		const query: PostType = await Post.create({
			profile: profile._id,
			title,
			description,
			imagePath: imageUrl,
			image
		});

		return query;
	}

	async update({profile, post_id}: Pick<UpdatePostType, 'profile' | 'post_id'>, postData: Pick<UpdatePostType, 'title' | 'description'>){
		const query = await Post.findOneAndUpdate({
			_id: post_id,
			profile: profile._id
		}, postData, {new: true});
		
		return query;
	}

	async delete({post_id, profile}: DeletePostType){
		const query = await Post.deleteOne({
			_id: post_id,
			profile: profile._id
		});
		return query;
	}

	async deleteAll(profile_id: ProfileByIdType){
		const query = await Post.deleteMany({profile: profile_id});
		return query;
	}
	
	async likePost(post_id: PostByIdType, profile: ProfileType){
		const query = await Post.findOneAndUpdate({_id: post_id}, {$addToSet: {likes: profile._id}}, { runValidators: true, new: true});
		return query;
	}

	async unlikePost(post_id: PostByIdType, profile: ProfileType){
		const query = await Post.findOneAndUpdate({_id: post_id}, {$pull: {likes: profile._id}}, { runValidators: true, new: true});
		return query;
	}
}

export const postRepository = new PostRepository();