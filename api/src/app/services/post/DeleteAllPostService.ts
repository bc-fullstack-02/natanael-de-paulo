import { postRepository } from '../../repository/PostRepository';
import { ProfileByIdType } from '../../shared/types/ProfileTypes';

class DeleteAllPostService{
	async execute(profile_id: ProfileByIdType ) { 
		const postById = postRepository.deleteAll(profile_id);
		return postById;
	}
}

export const deleteAllPostService = new DeleteAllPostService();