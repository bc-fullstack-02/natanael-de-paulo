import { Post } from '../../models/Post';

class ShowPostService {
	async execute(id : string) { 
		console.log(id);
		
		const postById = await Post.find().where('_id').equals(id);

		return postById;
	}
}

export { ShowPostService };