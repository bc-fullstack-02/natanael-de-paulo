import { Comment } from '../../models/Comment';

class ListCommentService {
	async execute( postId : string ) {
    
		const comments = await Comment.find( { post: postId } );

		return comments;
	}
}

export { ListCommentService };