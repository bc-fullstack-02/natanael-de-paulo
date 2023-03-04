import { profileRepository } from '../../repository/ProfileRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';
import { ProfileType } from '../../shared/types/ProfileTypes';
import { UserType } from '../../shared/types/UserTypes';

class CreateProfileService{
	async execute(user: UserType, profile: ProfileType){
		if(!user) throw new BadRequestException('Erro ao criar profile ou usario não existe');
		const newProfile = await profileRepository.create(user, profile);
		return newProfile;
	}
}

export const createProfileService = new CreateProfileService();