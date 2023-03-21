import { Comment } from '../../models/Comment';

class DeleteAllCommentService {
	async execute( profile_id : any ) { 
		const commentToDelete = await Comment.deleteMany({profile: profile_id });
		return commentToDelete;
	}
}

export const deleteAllCommentService = new DeleteAllCommentService();