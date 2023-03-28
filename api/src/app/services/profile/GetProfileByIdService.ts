import { profileRepository } from '../../repository/ProfileRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';
import { ProfileByIdType } from '../../shared/types/ProfileTypes';

class GetProfileByIdService{
	async execute(profile_id: ProfileByIdType){
		const profile = await profileRepository.getById(profile_id);
		if(!profile) throw new BadRequestException('Profile not found');
		return profile;
	}
}

export const getProfileByIdService = new GetProfileByIdService();