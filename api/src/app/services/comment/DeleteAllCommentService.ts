import { commentRepository } from '../../repository/CommentRepository';
import { ProfileByIdType } from '../../shared/types/ProfileTypes';

class DeleteAllCommentService {
	async execute(profile_id: ProfileByIdType ) { 
		await commentRepository.deleteAll(profile_id);
	}
}

export const deleteAllCommentService = new DeleteAllCommentService();