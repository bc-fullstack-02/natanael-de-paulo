import { userRepository } from '../../repository/UserRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';

class DeleteUserService{
	async execute(user_id: string) { 
		const user = await userRepository.getById(user_id);
		if(!user) throw new BadRequestException('usuario não encontrado');
		const userDeleted = await userRepository.delete(user);
		return userDeleted;
	}
}

export const deleteUserService = new DeleteUserService();