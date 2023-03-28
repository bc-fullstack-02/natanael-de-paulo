import { Types } from 'mongoose';
import { profileRepository } from '../../repository/ProfileRepository';
import { ProfileType } from '../../shared/types/ProfileTypes';

class FollowAndUnfollowProfileService {
	async execute(handleProfile: ProfileType, profileLogged: ProfileType){ 
		if(!handleProfile.followers.includes(profileLogged._id as Types.ObjectId)){
			await profileRepository.addFollowers(handleProfile._id, profileLogged._id);
			return `Agora você segue ${handleProfile.name}`;
		}

		await profileRepository.removeFollowers(handleProfile._id, profileLogged._id);
		return `Você deixou de seguir ${handleProfile.name}`;
	}
}

export const followAndUnfollowProfileService = new FollowAndUnfollowProfileService();