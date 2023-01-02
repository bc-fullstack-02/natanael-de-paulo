import { Post } from '../../models/Post';
import { Profile } from '../../models/Profile';

class FeedService {
	async execute(user_id: string){
		const currentProfile  = await Profile.findOne({}).where('user').equals(user_id);
		const friendsPosts  = await Post.find({profile: { $in:currentProfile?.following}}).populate('profile');
		
		return friendsPosts;
	}
}

export  { FeedService };