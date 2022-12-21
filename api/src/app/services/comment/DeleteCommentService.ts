import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  post_id: string;
  comment_id: string;
}

class DeleteCommentService {
	async execute( { post_id, comment_id } : Iprops ) { 
		const commentToDelete = await Comment.deleteOne({post: post_id}).where('_id').equals(comment_id);    
		const getComments = await Comment.find({post: post_id});

		await Post.findByIdAndUpdate(post_id, {
			comments: [...getComments]
		});
		
		return commentToDelete;
	}
}

export { DeleteCommentService };