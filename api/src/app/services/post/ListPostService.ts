import { Post } from '../../models/Post';
import { Profile } from '../../models/Profile';

class ListPostService {
	async execute(user_id: string) {
		const profile = await Profile.findOne({user: user_id});
		const postList = await Post.find({}).where('profile').equals(profile?._id).populate('profile');	
		return postList;
	}
}

export { ListPostService };