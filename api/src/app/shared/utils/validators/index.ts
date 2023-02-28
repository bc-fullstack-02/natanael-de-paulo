import { User } from '../../../models/User';
import { userRepository } from '../../../repository/UserRepository';
import { BadRequestException } from '../../errors/BadRequestException';

class Validate{
	required(value: string, message: string, status?: number){
		if (!value) throw new BadRequestException(`${message} is required`, status);
		return true;
	}

	async userIsRegistered(user: string){
		const userAlreadyExists = await userRepository.findUser(user);
		if (userAlreadyExists) throw new BadRequestException('User already exists!');
		return true;
	}

	emailFormat(email: string) {
		const regEmail = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		if (!regEmail.test(String(email))) throw new BadRequestException('Email format is invalid!');
		return true;
	}

	async emailIsRegistered(email: string) {
		const validatedEmail = await User.find({}).where('email').equals(email);
		if (validatedEmail) throw new BadRequestException(`e-mail ${email} is already registered!`);
		return true;
	}
}

export const validate = new Validate();