import { Profile } from '../models/Profile';
import { UserType } from '../shared/types/UserTypes';
import { ProfileByIdType, ProfileType } from '../shared/types/ProfileTypes';

class ProfileRepository {
	async getById(profile_id: ProfileByIdType){
		const query = await Profile.findById(profile_id);
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

	async addFollowers(handleProfile_id: ProfileByIdType, profileLogged_id: ProfileByIdType){
		await Promise.all([
			Profile.findByIdAndUpdate({_id: handleProfile_id}, {$addToSet: {followers: profileLogged_id}}, { runValidators: true, new: true}),
			Profile.findByIdAndUpdate({_id: profileLogged_id}, {$addToSet: {following: handleProfile_id}}, { runValidators: true, new: true})
		]);
	}

	async removeFollowers(handleProfile_id: ProfileByIdType, profileLogged_id: ProfileByIdType){
		await Promise.all([
			Profile.findByIdAndUpdate({_id: handleProfile_id}, {$pull: {followers: profileLogged_id}}, { runValidators: true, new: true}),
			Profile.findByIdAndUpdate({_id: profileLogged_id}, {$pull: {following: handleProfile_id}}, { runValidators: true, new: true})
		]);
	}

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