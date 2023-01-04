import { Post } from '../../models/Post';
import { Profile } from '../../models/Profile';
interface Iprops{
  title: string;
  description: string;
	user_id: string;
	imagePath?: string | undefined
}

class CreatePostService {
	async execute({ title, description, user_id, imagePath }: Iprops) {
		const profile = await Profile.findOne().where('user').equals(user_id);		
		const post = await Post.create({
			profile: profile?._id,
			title: title,
			description: description,
			imagePath: imagePath? imagePath: undefined,
			image: imagePath? true : false
		});

		return post;
	}

	//rota de postlike => req.publish('post-like', [args.profile], args)
}

export { CreatePostService };