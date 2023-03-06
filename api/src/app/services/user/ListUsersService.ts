import { userRepository } from '../../repository/UserRepository';

class ListUsersService{
	async execute(){
		const usersList = userRepository.findAll();
		return usersList;
	}
}

export const listUsersService = new ListUsersService();