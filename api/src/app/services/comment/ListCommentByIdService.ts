import { commentRepository } from '../../repository/CommentRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';
import { CommentByIdType } from '../../shared/types/CommentTypes';

class ListCommentByIdService {
	async execute(comment_id: CommentByIdType){ 
		const comment = await commentRepository.getById(comment_id);
		if(!comment) throw new BadRequestException('comment not found');
		return comment;
	}
}

export const listCommentByIdService = new ListCommentByIdService();