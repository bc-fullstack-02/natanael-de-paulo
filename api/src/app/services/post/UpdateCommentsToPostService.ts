import { commentRepository } from '../../repository/CommentRepository';
import { CommentType } from '../../shared/types/CommentTypes';
import { PostType } from '../../shared/types/PostTypes';

class UpdateCommentsToPostService{
	async add(post: PostType, comment: CommentType ){
		await commentRepository.updateCommentsToPost(post._id, comment._id);
	}

	async remove(post: PostType, comment: CommentType){
		await commentRepository.removeCommentsToPost(post._id, comment._id);
	}
}

export const updateCommentsToPostService = new UpdateCommentsToPostService();