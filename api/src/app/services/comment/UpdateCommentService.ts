import { commentRepository } from '../../repository/CommentRepository';
import { CommentByIdType } from '../../shared/types/CommentTypes';

class UpdateCommentService {
	async execute(comment_id: CommentByIdType, description: string ) { 
		const commentUpdated = await commentRepository.update(comment_id, description);
		return commentUpdated;
	}
}

export const updateCommentService = new UpdateCommentService();