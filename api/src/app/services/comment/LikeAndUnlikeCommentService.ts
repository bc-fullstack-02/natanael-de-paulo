import { Types } from 'mongoose';
import { Comment } from '../../models/Comment';
import { commentRepository } from '../../repository/CommentRepository';
import { CommentType } from '../../shared/types/CommentTypes';
import { ProfileType } from '../../shared/types/ProfileTypes';


class LikeAndUnlikeCommentService {
	async like(comment: CommentType, profile: ProfileType){
		const commentLiked = await commentRepository.likeComment(comment._id, profile._id);
		return commentLiked;
	}

	async unlike(comment: CommentType, profile: ProfileType){
		const commentUnliked = await commentRepository.unlikeComment(comment._id, profile._id);
		return commentUnliked;
	}
}

export const likeAndUnlikeCommentService = new LikeAndUnlikeCommentService();