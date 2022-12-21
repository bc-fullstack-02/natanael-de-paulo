import { Types } from 'mongoose';
import { Post } from '../../models/Post';
import { User } from '../../models/User';

interface IProps {
  post_id: string;
  user_id: string;
}

class LikePostService {
	async execute({post_id, user_id}: IProps) { 
		const user = await User.findById(user_id).populate('profile');
		const post = await Post.findById(post_id).populate('profile');

		console.log('user', user);
		console.log('post', post);
		

		if(!post?.likes.includes(user?.profile._id as Types.ObjectId)){
			const postLiked = Post.findByIdAndUpdate({_id: post_id}, {$addToSet: {likes: user?.profile._id}}, { runValidators: true, new: true});

			return postLiked;
		}

		const postUnliked = Post.findByIdAndUpdate({_id: post_id}, {$pull: {likes: user?.profile._id}}, { runValidators: true, new: true});

		return postUnliked;
		
	}
}

export { LikePostService };