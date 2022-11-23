import { Post } from '../../models/Post';

class DeletePostService{
	async execute(id : string) { 
		const postById = await Post.findByIdAndDelete(id);
		return postById;
	}
}

export { DeletePostService };