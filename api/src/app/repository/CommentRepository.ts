import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { CommentByIdType, CreateCommentType } from '../shared/types/CommentTypes';
import { PostByIdType } from '../shared/types/PostTypes';
import { ProfileByIdType } from '../shared/types/ProfileTypes';

class CommentRepository {
	// async getById(postId){
	// 	const post = await Post.findById(postId);
	// 	return post; 
	// }

	async findAll(post_id: PostByIdType){
		const query = await Comment.find({ post: post_id });
		return query;
	}

	async create({description, post, profile}: CreateCommentType){
		const query = await Comment.create({
			description,
			post: post._id,
			profile: profile._id,
		});
		return query;
	}

	async updateCommentsToPost(post_id: PostByIdType, comment_id: CommentByIdType ){
		const query = await Post.findOneAndUpdate({_id: post_id}, {$addToSet: {comments: comment_id}}, { runValidators: true, new: true});
		return query;
	}

	async removeCommentsToPost(post_id: PostByIdType, comment_id: CommentByIdType ){
		const query = await Post.findOneAndUpdate({_id: post_id}, {$pull: {comments: comment_id}}, { runValidators: true, new: true});
		return query;
	}
	// async update(postId){
	// 	const post = await Post.findByIdAndUpdate(postId, {});
	// 	return post;
	// }

	async deleteAllCommentsToPost(post_id: PostByIdType){
		const query = await Comment.deleteMany({post: post_id,});
		return query;
	}

	async deleteAll(profile_id: ProfileByIdType){
		const query = await Comment.deleteMany({profile: profile_id });
		return query;
	}
}

// 

export const commentRepository = new CommentRepository();