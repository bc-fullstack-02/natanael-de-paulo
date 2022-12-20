import { Profile } from '../../models/Profile';

class SearchProfileService {
	async execute(q: string) {
		try {
			const profileData = await Profile.find({$text:{ $search: q}}, {score: {$meta: 'textScore'}}).sort({score: {$meta: 'textScore'}});
    
			return profileData;
		} catch (error) {
			return error;
		}
	}
}

export { SearchProfileService };