import { Types } from 'mongoose';
import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';

interface IProps {
  user: any;
	comment: any;
}

class LikeAndUnlikeCommentService {
	// async execute({ post_id, comment_id }: IProps) { 
	// 	const comment = await Comment.findById(comment_id).where('post').equals(post_id).populate('profile');

	// 	if(!comment?.likes.includes(comment?.profile._id as Types.ObjectId)){
	// 		const commentLiked = Comment.findByIdAndUpdate({_id: comment_id}, {$addToSet: {likes: comment?.profile._id}}, { runValidators: true, new: true});

	// 		return commentLiked;
	// 	}

	// 	const commentUnliked = Comment.findByIdAndUpdate({_id: comment_id}, {$pull: {likes: comment?.profile._id}}, { runValidators: true, new: true});

	// 	return commentUnliked;
	// }


	async like({user, comment}: IProps){
		const commentLiked = Comment.findByIdAndUpdate({_id: comment._id}, {$addToSet: {likes: user?.profile._id}}, { runValidators: true, new: true});

		return commentLiked;
	}

	async unlike({user, comment}: IProps){
		const commentUnliked = Comment.findByIdAndUpdate({_id: comment._id}, {$pull: {likes: user?.profile._id}}, { runValidators: true, new: true});

		return commentUnliked;
	}
}

export { LikeAndUnlikeCommentService };