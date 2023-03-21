import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { UserType } from '../shared/types/UserTypes';
import bcrypt from 'bcrypt';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import {ProfileType } from '../shared/types/ProfileTypes';


class ProfileRepository {
	// async getById(user_id: GetByIdUserType) {
	// 	const getByIdUser = await User.findById(user_id).select('-password');
	// 	return getByIdUser;
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

	

	// async findUser(user: string){
	// 	const userData = await User.findOne({user}).where('user').equals(user);
	// 	return userData;
	// }

	async delete(profile_id: any){
		const query = await Profile.deleteOne({_id: profile_id});
		return query;
	}
}

export const profileRepository = new ProfileRepository();