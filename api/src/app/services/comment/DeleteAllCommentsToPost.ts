import { commentRepository } from '../../repository/CommentRepository';
import { PostByIdType } from '../../shared/types/PostTypes';

class DeleteAllCommentToPostService {
	async execute(post_id: PostByIdType ) { 
		await commentRepository.deleteAllCommentsToPost(post_id);
	}
}

export const deleteAllCommentToPostService = new DeleteAllCommentToPostService();