import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { CreateUserType, GetByIdUserType } from '../shared/utils/types/UserTypes';
import bcrypt from 'bcrypt';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

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

	async delete(user_id: string){
		const user = await User.findById(user_id);

		await Comment.find({profile: user?.profile._id }).deleteMany();
		await Post.find({profile: user?.profile._id }).deleteMany();
		await Profile.find({user: user_id}).deleteMany();
		

		return await User.findByIdAndDelete(user_id).select('-password');
	}
}

export const userRepository = new UserRepository();