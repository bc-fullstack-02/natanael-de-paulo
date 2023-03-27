import { postRepository } from '../../repository/PostRepository';
import { UpdatePostType } from '../../shared/types/PostTypes';

class UpdatePostService{
	async execute({profile, post_id, title, description}: UpdatePostType ) { 
		const postData: Pick<UpdatePostType, 'title' | 'description'> = {
			title,
			description
		};
		
		const updatedPost = await postRepository.update({profile, post_id}, postData);
		return updatedPost;
	}
}

export const updatePostService = new UpdatePostService();