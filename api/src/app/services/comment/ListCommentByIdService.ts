import { commentRepository } from '../../repository/CommentRepository';
import { CommentByIdType } from '../../shared/types/CommentTypes';

class ListCommentByIdService {
	async execute(comment_id: CommentByIdType) { 
		const comment = commentRepository.getById(comment_id);
		return comment;
	}
}

export const listCommentByIdService = new ListCommentByIdService();