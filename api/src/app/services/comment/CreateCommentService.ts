import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  postId: string;
  description: string;
}

class CreateCommentService {
	async execute( { postId, description } : Iprops ) { 
		
		const getcomments = await Comment.find({post: postId});

		const newComment = await Comment.create({
			description,
			post: postId
		});

		await Post.findByIdAndUpdate(postId, {
			comments: [...getcomments, newComment]
		});
		
		
		return newComment;
	}
}

export { CreateCommentService };