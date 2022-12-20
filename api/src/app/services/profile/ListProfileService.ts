import { Profile } from '../../models/Profile';

class ListProfileService {
	async execute() {
		const profileData = await Profile.find({});
		return profileData;
	}
}

export { ListProfileService };