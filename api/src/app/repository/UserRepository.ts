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
		const userData = await User.findOne({$or: [{user}, {email: user}]}).select('+password');
		return userData;
	}

	async findAll(){
		const users = await User.find({});
		return users;
	}

	async create({user, email, passwordHash}: CreateUserType) {
		const newUser = await User.create({
			user,
			email,
			password: passwordHash
		});

		return newUser;
	}

	async insetProfileInUser({user, profile}: UpdateUserType ){
		const userUpdated = await User.findByIdAndUpdate(user._id, { profile: profile }, { new: true });

		return userUpdated;
	}

	async findByIdAndUpdate({user, passwordHash, user_id}: UpdateUserRepositoryType){
		const userUpdated = await User.findByIdAndUpdate(user_id, {
			user,
			password: passwordHash,
		}, {new: true});

		return userUpdated;
	}

	async delete(user: UserType){
		await Comment.find({profile: user.profile }).deleteMany();
		await Post.find({profile: user.profile }).deleteMany();
		await Profile.find({user: user._id}).deleteMany();
		
		return await User.findByIdAndDelete(user._id).select('-password');
	}

	// async update(){

	// }
}

export const userRepository = new UserRepository();