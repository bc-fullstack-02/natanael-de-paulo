import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';

interface Iprops{
  post_id: string;
  description: string;
	user_id: string;
}

class CreateCommentService {
	async execute( { user_id, post_id, description } : Iprops ) { 
		
		const currentComments = await Comment.find({ post: post_id });

		const newComment = await Comment.create({
			description,
			post: post_id,
			user: user_id,
		});

		await Post.findByIdAndUpdate(post_id, {
			comments: [...currentComments, newComment]
		});
		
		// req.publish('comment', [args.profile], args) 
		//rota de commentslike => req.publish('comment-like', [args.profile], args)
		return newComment;
	}
}

export { CreateCommentService };