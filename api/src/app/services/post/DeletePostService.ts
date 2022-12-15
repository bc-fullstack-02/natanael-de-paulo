import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';

interface Iprops{
	user_id: string;
	post_id: string;
}

class DeletePostService{
	async execute({ user_id, post_id } : Iprops) { 

		await Comment.find({post: post_id}).deleteMany().where('user').equals(user_id);
		const postById = Post.findByIdAndDelete(post_id).where('user').equals(user_id);

		return postById;
	}
}

export { DeletePostService };