import { userRepository } from '../../repository/UserRepository';

class DeleteUserService{
	async execute(user_id: string) { 
		const user = await userRepository.delete(user_id);
		
		return user;
	}
}

export const deleteUserService = new DeleteUserService();