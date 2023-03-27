import { commentRepository } from '../../repository/CommentRepository';
import { CommentByIdType } from '../../shared/types/CommentTypes';
import { PostByIdType } from '../../shared/types/PostTypes';

class UpdateCommentsToPostService{
	async add(post_id: PostByIdType, comment_id: CommentByIdType ){
		await commentRepository.updateCommentsToPost(post_id, comment_id);
	}

	async remove(post_id: PostByIdType, comment_id: CommentByIdType){
		await commentRepository.removeCommentsToPost(post_id, comment_id);
	}
}

export const updateCommentsToPostService = new UpdateCommentsToPostService();