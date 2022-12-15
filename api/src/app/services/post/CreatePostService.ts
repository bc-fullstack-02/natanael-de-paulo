import { Post } from '../../models/Post';

interface Iprops{
  title: string;
  description: string;
	user_id: string;
}

class CreatePostService {
	async execute( {title, description, user_id} : Iprops ) { 
		const post = await Post.create({
			user: user_id,
			title: title,
			description: description
		});

		return post;
	}
}

export { CreatePostService };