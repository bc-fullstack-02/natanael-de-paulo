import { Post } from '../../models/Post';

interface IProps {
  id: string;
  title: string;
  description: string;
}

class UpdatePostService{
	async execute({ id, title, description } : IProps ) { 
		const post = {
			title,
			description
		};

		await Post.findByIdAndUpdate(id, post);
		const updatedPost = await Post.findById(id);
		return updatedPost;
	}
}

export { UpdatePostService };