import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  postId: string;
  id: string;
  description: string;
}

class UpdateCommentService {
	async execute( { postId, id, description } : Iprops ) { 
    
		const commentToUpdate = await Comment.find({post: postId}).updateOne({
			description: description
		}).where('_id').equals(id);    


		const getComments = await Comment.find({post: postId});

		await Post.findByIdAndUpdate(postId, {
			comments: [...getComments]
		});
		
		return commentToUpdate;
	}
}

export { UpdateCommentService };