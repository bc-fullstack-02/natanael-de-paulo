import { Post } from '../../models/Post';

class ListPostService {
	async execute() {
		const postList = await Post.find();

		console.log(postList);
		return postList;
	}
}

export { ListPostService };