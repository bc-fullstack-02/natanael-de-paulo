import { Post } from '../../models/Post';

interface Iprops{
	post: any;
	user: any;
}


class LikePostService {
	// async execute({post_id, user_id}: IProps) { 
	// 	const user = await User.findById(user_id).populate('profile');
	// 	const post = await Post.findById(post_id).populate('profile');

	// 	console.log('user', user);
	// 	console.log('post', post);
		

	// 	if(!post?.likes.includes(user?.profile._id as Types.ObjectId)){
	// 		const postLiked = Post.findByIdAndUpdate({_id: post_id}, {$addToSet: {likes: user?.profile._id}}, { runValidators: true, new: true});

	// 		return postLiked;
	// 	}

	// 	const postUnliked = Post.findByIdAndUpdate({_id: post_id}, {$pull: {likes: user?.profile._id}}, { runValidators: true, new: true});

	// 	return postUnliked;
		
	// }

	async like( { post, user } : Iprops){
		const postLiked =  Post.findByIdAndUpdate({_id: post._id}, {$addToSet: {likes: user?.profile._id}}, { runValidators: true, new: true});

		return postLiked;
	}

	async unlike({ post, user } : Iprops){
		const postUnliked =  Post.findByIdAndUpdate({_id: post._id}, {$pull: {likes: user?.profile._id}}, { runValidators: true, new: true});

		return postUnliked;
	}
}

export { LikePostService };