import { profileRepository } from '../../repository/ProfileRepository';
import { ProfileByIdType } from '../../shared/types/ProfileTypes';

class GetProfileByIdService{
	execute(profile_id: ProfileByIdType){
		const profile = profileRepository.getById(profile_id);
		return profile;
	}
}

export const getProfileByIdService = new GetProfileByIdService();