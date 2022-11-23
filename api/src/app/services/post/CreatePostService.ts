import { Post } from '../../models/Post';

interface Iprops{
  title: string;
  description: string;
}

class CreatePostService {
	async execute({ title, description } : Iprops ) { 
		try {
			const post = await Post.create({
				title: title,
				description: description
			});
	
			return post;
		} catch (error) {
			console.log(error);
			return;
		}
	}
}

export { CreatePostService };