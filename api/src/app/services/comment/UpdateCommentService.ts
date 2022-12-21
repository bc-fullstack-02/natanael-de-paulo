import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  post_id: string;
  comment_id: string;
  description: string;
}

class UpdateCommentService {
	async execute( { post_id, comment_id, description } : Iprops ) { 
    
		await Comment.findByIdAndUpdate(comment_id, {
			description: description
		});

		const getComments = await Comment.find({ post: post_id });
		
		await Post.findByIdAndUpdate(post_id, {
			comments: [...getComments]
		});
		
		return 'Comentario atualizado';
	}
}

export { UpdateCommentService };