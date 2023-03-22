import { postRepository } from '../../repository/PostRepository';
import { DeletePostType } from '../../shared/types/PostTypes';

class DeletePostService{
	async execute({ profile, post_id }: DeletePostType  ) { 
		await postRepository.delete({profile, post_id});
	}
}

export const deletePostService = new DeletePostService();