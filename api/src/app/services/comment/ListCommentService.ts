import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';


class ListCommentService {
	async execute( postId : string ) {
    
		const comments = Comment.find( {post: postId } );

		return comments;
	}
}

export { ListCommentService };