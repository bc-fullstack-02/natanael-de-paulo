import { profileRepository } from '../../repository/ProfileRepository';
import { ProfileByIdType } from '../../shared/types/ProfileTypes';

class DeleteProfileService{
	async execute(profile_id: ProfileByIdType){
		const query = await profileRepository.delete(profile_id);
		return query;
	}
}

export const deleteProfileService = new DeleteProfileService();