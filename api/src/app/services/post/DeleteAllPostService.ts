import { Post } from '../../models/Post';

class DeleteAllPostService{
	async execute(profile_id : any) { 
		const postById = Post.deleteMany({}).where('profile').equals(profile_id);
		return postById;
	}
}

export const deleteAllPostService = new DeleteAllPostService();