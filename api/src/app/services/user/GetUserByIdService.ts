import { userRepository } from '../../repository/UserRepository';
import { GetByIdUserType } from '../../shared/types/UserTypes';

class GetUserByIdService {
	async execute(user_id: GetByIdUserType ){
		const user = await userRepository.getById(user_id);
		return user;
	}
}

export const getUserByIdService = new GetUserByIdService();