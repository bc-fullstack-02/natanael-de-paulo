import { Profile } from '../../models/Profile';

class ListProfileService {
	async execute(user_id: string) {
		const profileData = await Profile.find({}).where('user').ne(user_id);
		return profileData;
	}
}

export { ListProfileService };