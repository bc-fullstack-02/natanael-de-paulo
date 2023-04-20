import { UserType } from '../../shared/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';
import bcrypt from 'bcryptjs';

class CreateUserService {
	async execute({user, password, email}: UserType) {
		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = await userRepository.create({user, email, passwordHash});
		return newUser;
	}
}

export const createUserService = new CreateUserService();