import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { GetByIdUserType, UserType } from '../shared/types/UserTypes';
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

	// async delete(user: UserType){
	// 	await Comment.find({profile: user.profile }).deleteMany();
	// 	await Post.find({profile: user.profile }).deleteMany();
	// 	await Profile.find({user: user._id}).deleteMany();
		
	// 	return await User.findByIdAndDelete(user._id).select('-password');
	// }
}

export const profileRepository = new ProfileRepository();