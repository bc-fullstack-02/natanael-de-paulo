import { profileRepository } from '../../repository/ProfileRepository';

class ListProfileService {
	async execute() {
		const profiles = await profileRepository.getAll();
		return profiles;
	}
}

export const listProfileService = new ListProfileService();