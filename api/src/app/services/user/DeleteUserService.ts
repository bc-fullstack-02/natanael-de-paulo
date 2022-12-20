import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';
import { Profile } from '../../models/Profile';
import { User } from '../../models/User';

class DeleteUserService{
	async execute(user_id: string) { 
		const user = await User.findById(user_id);
		await Comment.find({profile: user?.profile._id }).deleteMany();
		await Post.find({profile: user?.profile._id }).deleteMany();
		await Profile.find({user: user_id}).deleteMany();
		await User.findByIdAndDelete(user_id);
	}
}

export { DeleteUserService };