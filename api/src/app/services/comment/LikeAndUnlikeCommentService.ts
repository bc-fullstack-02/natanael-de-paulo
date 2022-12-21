import { Types } from 'mongoose';
import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';

interface IProps {
  post_id: string;
	comment_id: string;
}

class LikeAndUnlikeCommentService {
	async execute({ post_id, comment_id }: IProps) { 
		const comment = await Comment.findById(comment_id).where('post').equals(post_id).populate('profile');

		if(!comment?.likes.includes(comment?.profile._id as Types.ObjectId)){
			const commentLiked = Comment.findByIdAndUpdate({_id: comment_id}, {$addToSet: {likes: comment?.profile._id}}, { runValidators: true, new: true});

			return commentLiked;
		}

		const commentUnliked = Comment.findByIdAndUpdate({_id: comment_id}, {$pull: {likes: comment?.profile._id}}, { runValidators: true, new: true});

		return commentUnliked;
	}
}

export { LikeAndUnlikeCommentService };