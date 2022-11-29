import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  postId: string;
  id: string;
}

class DeleteCommentService {
	async execute( { postId, id } : Iprops ) { 
		const commentToDelete = await Comment.find({post: postId}).deleteOne().where('_id').equals(id);    
		const getComments = await Comment.find({post: postId});

		await Post.findByIdAndUpdate(postId, {
			comments: [...getComments]
		});
		
		return commentToDelete;
	}
}

export { DeleteCommentService };