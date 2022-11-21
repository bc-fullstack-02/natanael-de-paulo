import { Post } from '../../models/Post';

class PostListService {
	async execute() {
		const postList = await Post.find();

		console.log(postList);
		
		return postList;
	}
}

export { PostListService };