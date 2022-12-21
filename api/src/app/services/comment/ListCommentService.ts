import { Comment } from '../../models/Comment';

class ListCommentService {
	async execute( post_id : string ) {
    
		const comments = await Comment.find( { post: post_id } );

		return comments;
	}
}

export { ListCommentService };