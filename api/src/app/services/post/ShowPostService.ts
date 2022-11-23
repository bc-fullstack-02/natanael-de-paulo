import { Post } from '../../models/Post';

class ShowPostService {
	async execute(_id : string) { 
		console.log(_id);
		
		const postById = await Post.find().where('_id').equals(_id);

		return postById;
	}
}

export { ShowPostService };