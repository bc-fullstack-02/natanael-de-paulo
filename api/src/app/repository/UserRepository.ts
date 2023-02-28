import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { CreateUserRepositoryType, GetByIdUserType, UserType } from '../shared/utils/types/UserTypes';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { ProfileType } from '../shared/utils/types/ProfileTypes';

class UserRepository {
	async getById(user_id: GetByIdUserType) {
		const getByIdUser = await User.findById(user_id).select('-password').populate('profile');
		return getByIdUser;
	}

	async create({user, passwordHash}: CreateUserRepositoryType) {
		const newUser = await User.create({
			user: user,
			password: passwordHash
		});

		return newUser;
	}

	async update(user: UserType, profile: ProfileType ){
		await User.findByIdAndUpdate(user._id, { profile: profile});
	}

	async findUser(user: string){
		const userData = await User.findOne({user}).where('user').equals(user);
		return userData;
	}

	async delete(user: UserType){
		await Comment.find({profile: user.profile }).deleteMany();
		await Post.find({profile: user.profile }).deleteMany();
		await Profile.find({user: user._id}).deleteMany();
		
		return await User.findByIdAndDelete(user._id).select('-password');
	}
}

export const userRepository = new UserRepository();