import { Comment } from '../../models/Comment';
import { Post } from '../../models/Post';

class DeletePostService{
	async execute(id : string) { 

		await Comment.find({post: id}).deleteMany();
		const postById = await Post.findByIdAndDelete(id);

		return postById;
	}
}

export { DeletePostService };