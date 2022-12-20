import { Post } from '../../models/Post';

class ListPostService {
	async execute(user_id : string) {
		const postList = await Post.find({ Profile: user_id });
		return postList;
	}
}

export { ListPostService };