import { userRepository } from '../../repository/UserRepository';
import { UserByIdType } from '../../shared/types/UserTypes';

class DeleteUserService{
	async execute(user_id: UserByIdType) { 
		const userDeleted = await userRepository.delete(user_id);
		return userDeleted;
	}
}

export const deleteUserService = new DeleteUserService();