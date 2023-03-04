import { UserType } from '../../shared/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';
import bcrypt from 'bcrypt';

class CreateUserService {
	async execute({user, password}: UserType) {
		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = await userRepository.create({user, passwordHash});
		return newUser;
	}
}

export const createUserService = new CreateUserService();