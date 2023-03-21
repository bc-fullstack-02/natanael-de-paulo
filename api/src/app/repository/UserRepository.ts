import { User } from '../models/User';
import { CreateUserType, UserByIdType, UpdateUserRepositoryType, UpdateUserType } from '../shared/types/UserTypes';

class UserRepository {
	async getById(user_id: UserByIdType) {
		const query = await User.findById(user_id).populate('profile');
		return query;
	}

	async findUserForAuth(user: string){
		const query = await User.findOne({$or: [{user}, {email: user}]}).select('+password');
		return query;
	}

	async findUser(user: string){
		const query = await User.findOne({$or: [{user}, {email: user}]});
		return query;
	}

	async findAll(){
		const query = await User.find({});
		return query;
	}

	async create({user, email, passwordHash}: CreateUserType) {
		const query = await User.create({
			user,
			email,
			password: passwordHash
		});

		return query;
	}

	async insetProfileInUser({user, profile}: UpdateUserType ){
		const query = await User.findByIdAndUpdate(user._id, { profile: profile }, { new: true });

		return query;
	}

	async findByIdAndUpdate({user, passwordHash, user_id}: UpdateUserRepositoryType){
		const query = await User.findByIdAndUpdate(user_id, {
			user,
			password: passwordHash,
		}, {new: true});

		return query;
	}

	async delete(user_id: UserByIdType){
		const query = await User.deleteOne({_id: user_id});
		return query;
	}

	// async update(){

	// }
}

export const userRepository = new UserRepository();