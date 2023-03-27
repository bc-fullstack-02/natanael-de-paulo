import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { UserType } from '../shared/types/UserTypes';
import { ProfileByIdType, ProfileType } from '../shared/types/ProfileTypes';

class ProfileRepository {
	async getById(profile_id: ProfileByIdType) {
		const query = await User.findById(profile_id);
		return query;
	}

	async getAll(){
		const query = await Profile.find();
		return query;
	}
	// async findProfile(user_id: ProfileByIdType){
	// 	const userData = await Profile.findOne({: user_id });
	// 	return userData;
	// }

	async create(user: UserType, profile: ProfileType) {
		const dataProfile = await Profile.create({
			name: profile.name,
			user: user._id
		});

		return dataProfile;
	}

	// 	const newProfile = await Profile.create({
	// 		name: profile.name || user,
	// 		user: newUser._id,
	// 	});

	async delete(profile_id: ProfileByIdType){
		const query = await Profile.deleteOne({_id: profile_id});
		return query;
	}
}

export const profileRepository = new ProfileRepository();