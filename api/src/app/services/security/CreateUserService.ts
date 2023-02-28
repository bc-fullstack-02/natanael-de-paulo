import { CreateUserType } from '../../shared/utils/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';
import bcrypt from 'bcrypt';
import { profileRepository } from '../../repository/ProfileRepository';

class CreateUserService {
	async execute({user, password, profile}: CreateUserType) {
		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = await userRepository.create({user, passwordHash});
		await profileRepository.create(newUser, profile);
		
		return newUser;
	}
}

export const createUserService = new CreateUserService();