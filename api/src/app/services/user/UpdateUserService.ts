import bcrypt from 'bcryptjs';
import { UserByIdType, UserType } from '../../shared/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';

class UpdateUserService{
	async execute({user, password}: Pick<UserType, 'user' | 'password'>, user_id: UserByIdType){
		const passwordHash = await bcrypt.hash(password, 10);
		const userUpdated = await userRepository.findByIdAndUpdate({user, passwordHash, user_id});
		return userUpdated;
	}
}

export const updateUserService = new UpdateUserService();