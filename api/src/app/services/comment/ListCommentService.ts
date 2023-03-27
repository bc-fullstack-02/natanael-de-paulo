import { commentRepository } from '../../repository/CommentRepository';
import { PostByIdType } from '../../shared/types/PostTypes';

class ListCommentService {
	async execute( post_id: PostByIdType ) {
		const comments = await commentRepository.findAll(post_id);
		return comments;
	}
}

export const listCommentService = new ListCommentService();