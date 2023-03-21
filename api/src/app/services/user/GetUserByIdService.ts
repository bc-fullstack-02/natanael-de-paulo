import { userRepository } from '../../repository/UserRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';
import { UserByIdType } from '../../shared/types/UserTypes';

class GetUserByIdService {
	async execute(user_id: UserByIdType ){
		const user = await userRepository.getById(user_id);
		if(!user) throw new BadRequestException('User not found');
		return user;
	}
}

export const getUserByIdService = new GetUserByIdService();