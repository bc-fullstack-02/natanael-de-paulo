import { Post } from '../../models/Post';
interface Iprops{
  title: string;
  description: string;
	user_id: string;
}

class CreatePostService {
	async execute( { title, description, user_id } : Iprops ) {
		
		const post = await Post.create({
			profile: user_id,
			title: title,
			description: description
		});

		return post;
	}

	//rota de postlike => req.publish('post-like', [args.profile], args)
}

export { CreatePostService };