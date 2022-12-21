import { Comment } from '../../models/Comment';
import {  Post } from '../../models/Post';
import { User } from '../../models/User';

interface Iprops{
  post_id: string;
  description: string;
	user_id: string;
}

class CreateCommentService {
	async execute( { user_id, post_id, description } : Iprops ) { 
		
		const user = await User.findById(user_id).populate('profile');
		const currentComments = await Comment.find({ post: post_id });

		const newComment = await Comment.create({
			description,
			post: post_id,
			profile: user?.profile._id,
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