import { Post } from '../../models/Post';

class ListPostByIdService {
	async execute(id : string) { 
		const post = await Post.find().where('_id').equals(id);
		return post;
	}
}

export { ListPostByIdService };