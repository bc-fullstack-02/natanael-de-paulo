import { profileRepository } from '../../repository/ProfileRepository';

class DeleteProfileService{
	async execute(profile_id: any){
		const query = await profileRepository.delete(profile_id);
		return query;
	}
}

export const deleteProfileService = new DeleteProfileService();