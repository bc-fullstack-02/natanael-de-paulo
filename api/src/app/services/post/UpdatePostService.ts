import { Post } from '../../models/Post';

interface IProps {
	user_id: string;
  post_id: string;
  title: string;
  description: string;
}

class UpdatePostService{
	async execute({user_id, post_id, title, description } : IProps ) { 
		const post = {
			title,
			description
		};
		
		const updatedPost = Post.findByIdAndUpdate(post_id, post).where('user').equals(user_id);
		
		return updatedPost;
	}
}

export { UpdatePostService };