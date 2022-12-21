import { Comment } from '../../models/Comment';

interface Iprops{
  post_id: string;
  comment_id: string;
}

class ListCommentByIdService {
	async execute( { post_id, comment_id } : Iprops ) { 
    
		const comment = await Comment.findOne({post: post_id}).where('_id').equals(comment_id);    
		return comment;
	}
}

export { ListCommentByIdService };