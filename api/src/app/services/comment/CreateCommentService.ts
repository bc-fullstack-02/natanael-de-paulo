import { commentRepository } from '../../repository/CommentRepository';
import { CreateCommentType } from '../../shared/types/CommentTypes';

class CreateCommentService {
	async execute( { post, profile, description } : CreateCommentType ) { 
		const newComment = await commentRepository.create({post, profile, description});
		return newComment;
	}
}

export const createCommentService = new CreateCommentService();