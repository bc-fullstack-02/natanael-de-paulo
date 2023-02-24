import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { CreateUserType, GetByIdUserType } from '../shared/utils/types/UserTypes';
import bcrypt from 'bcrypt';

class UserRepository {
	async getById(user_id: GetByIdUserType) {
		const getByIdUser = await User.findById(user_id).select('-password');
		return getByIdUser;
	}

	async create({ user, password, name }: CreateUserType) {
		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			user: user,
			password: passwordHash
		});

		const newProfile = await Profile.create({
			name: name || user,
			user: newUser._id,
		});

		await User.findByIdAndUpdate(newUser._id, { profile: newProfile });
		return newUser;
	}

	async findUser(user: string){
		const userData = await User.findOne({user}).where('user').equals(user);
		return userData;
	}
}

export const userRepository = new UserRepository();