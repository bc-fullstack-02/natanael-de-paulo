import {Request, Response} from 'express';
import { Types } from 'mongoose';
import { Post } from '../../models/Post';
import { User } from '../../models/User';
import { LikePostService } from '../../services/post/LikeAndUnlikePostService';

class LikeAndUnlikePostController {
	async handle(req: Request, res: Response){
		const { post_id } = req.params;
		const user_id = req.user_id;
		const user = await User.findById(user_id).populate('profile');
		const post = await Post.findById(post_id).populate('profile');
		const likePostService = new LikePostService();

		if(!post?.likes.includes(user?.profile._id as Types.ObjectId)) {
			const postLiked = await likePostService.like({post, user});
			await req.publish('comment-like', [post?.profile], postLiked);
			return res.json(postLiked);
		}

		const postUnliked = await likePostService.unlike({ post, user });
		return res.json(postUnliked);
	}
}

export const likeAndUnlikePostController = new LikeAndUnlikePostController();