import { Post } from '../../models/Post';
import { Profile } from '../../models/Profile';
interface Iprops{
  title: string;
  description: string;
	user_id: string;
}

class CreatePostService {
	async execute({ title, description, user_id }: Iprops) {
		const profile = await Profile.findOne().where('user').equals(user_id);		
		const post = await Post.create({
			profile: profile?._id,
			title: title,
			description: description
		});

		return post;
	}

	//rota de postlike => req.publish('post-like', [args.profile], args)
}

export { CreatePostService };