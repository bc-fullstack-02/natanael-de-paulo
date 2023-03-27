import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { CommentByIdType, CreateCommentType, DeleteCommentType } from '../shared/types/CommentTypes';
import { PostByIdType } from '../shared/types/PostTypes';
import { ProfileByIdType } from '../shared/types/ProfileTypes';

class CommentRepository {
	async getById(comment_id: CommentByIdType){
		const query = await Comment.findById(comment_id);
		return query; 
	}

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

	async likeComment(comment_id: CommentByIdType, profile_id: ProfileByIdType){
		const query = await Comment.findByIdAndUpdate({_id: comment_id}, {$addToSet: {likes: profile_id}}, { runValidators: true, new: true});
		return query;
	}

	async unlikeComment(comment_id: CommentByIdType, profile_id: ProfileByIdType){
		const query = await Comment.findOneAndUpdate({_id: comment_id}, {$pull: {likes: profile_id}}, { runValidators: true, new: true});
		return query;
	}

	async update(comment_id: CommentByIdType, description: string){
		const query = await Comment.findByIdAndUpdate(comment_id, {
			$set: { description }
		}, {new: true});
		return query;
	}

	async delete({post_id, comment_id}: DeleteCommentType){
		const query = await Comment.deleteOne({
			_id: comment_id,
			post: post_id
		});
		return query;
	}

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