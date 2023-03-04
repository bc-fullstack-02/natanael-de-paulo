import { Profile } from '../models/Profile';
import { User } from '../models/User';
import { CreateUserType, GetByIdUserType, UpdateUserRepositoryType, UpdateUserType, UserType } from '../shared/types/UserTypes';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

class UserRepository {

	async getById(user_id: GetByIdUserType) {
		const getByIdUser = User.findById(user_id).populate('profile');
		return getByIdUser;
	}

	async findUser(user: string){
		const userData = await User.findOne({user}).where('user').equals(user).select('+password');
		return userData;
	}

	async create({user, passwordHash}: CreateUserType) {
		const newUser = await User.create({
			user: user,
			password: passwordHash
		});

		return newUser;
	}

	async insetProfileInUser({user, profile}: UpdateUserType ){
		const userUpdated = await User.findByIdAndUpdate(user._id, { profile: profile }, { new: true });

		return userUpdated;
	}

	async findByIdAndUpdate({user, passwordHash}: UpdateUserRepositoryType){
		await User.findByIdAndUpdate(user._id, {
			user: user.user,
			password: passwordHash,
		});
	}


	async delete(user: UserType){
		await Comment.find({profile: user.profile }).deleteMany();
		await Post.find({profile: user.profile }).deleteMany();
		await Profile.find({user: user._id}).deleteMany();
		
		return await User.findByIdAndDelete(user._id).select('-password');
	}
}

export const userRepository = new UserRepository();