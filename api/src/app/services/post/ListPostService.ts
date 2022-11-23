import { Post } from '../../models/Post';

class ListPostService {
	async execute() {
		const postList = await Post.find();

		return postList;
	}
}

export { ListPostService };