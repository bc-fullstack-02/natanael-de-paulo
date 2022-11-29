import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  postId: string;
  id: string;
}

class ListCommentByIdService {
	async execute( { postId, id } : Iprops ) { 
    
		const comment = await Comment.find({post: postId}).where('_id').equals(id);    
		return comment;
	}
}

export { ListCommentByIdService };