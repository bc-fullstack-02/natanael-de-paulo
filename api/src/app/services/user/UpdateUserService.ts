import bcrypt from 'bcrypt';
import { GetByIdUserType, UpdateUserType, UserType } from '../../shared/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class UpdateUserService{
	async insertProfileInUser({user, profile}: UpdateUserType) { 
		const userUpdated = await userRepository.insetProfileInUser({user, profile});
		return userUpdated;
	}

	async update({user, password}: Pick<UserType, 'user' | 'password'>, user_id: GetByIdUserType){
		const userToUpdate = await userRepository.getById(user_id);
		if(!userToUpdate) throw new BadRequestException('user not found to update');
		const passwordHash = await bcrypt.hash(password, 10);
		const userUpdated = await userRepository.findByIdAndUpdate({user, passwordHash, user_id});

		return userUpdated;
	}
}

export const updateUserService = new UpdateUserService();