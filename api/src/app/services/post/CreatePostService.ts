import { Post } from '../../models/Post';

interface Iprops{
  title: string;
  description: string;
}

class CreatePostService {
	async execute({title, description} : Iprops ) { 
		
		const post = await Post.create({
			title: title,
			description: description
		});

		return post;
	}
}

export { CreatePostService };