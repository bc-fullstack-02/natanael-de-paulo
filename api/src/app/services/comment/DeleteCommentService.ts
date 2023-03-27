import { commentRepository } from '../../repository/CommentRepository';
import { DeleteCommentType } from '../../shared/types/CommentTypes';

class DeleteCommentService {
	async execute( { post_id, comment_id }: DeleteCommentType ) { 
		const commentDeleted = await commentRepository.delete({post_id, comment_id}); 
		return commentDeleted;
	}
}

export const deleteCommentService = new DeleteCommentService();