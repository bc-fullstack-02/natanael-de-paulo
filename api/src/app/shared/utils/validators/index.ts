import { User } from '../../../models/User';
import { postRepository } from '../../../repository/PostRepository';
import { userRepository } from '../../../repository/UserRepository';
import { BadRequestException } from '../../errors/BadRequestException';

interface Field{
	name: string;
	value: any
}

class Validate{
	required(fields: Field[]){
		for (const field of fields) {
			if (!field.value) {
				throw new BadRequestException(`${field.name} is required`);
			}
		}
		return true;
	}

	field(field: string) {
		if (!field) {
			throw new BadRequestException(`${field} is required`, 400);
		}
	}

	async userIsRegistered(user: string){
		const userAlreadyExists = await userRepository.findUser(user);

		if (userAlreadyExists) throw new BadRequestException('User or email already exists!');
		return true;
	}

	emailFormat(email: string) {
		const regEmail = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		if (!regEmail.test(String(email))) throw new BadRequestException('Email format is invalid!');
		return true;
	}

	async emailIsRegistered(email: string) {
		const validatedEmail = await User.findOne({}).where('email').equals(email);
		if (validatedEmail) throw new BadRequestException('Email is already registered!');
		return true;
	}

	async postExists(post_id: string){
		const post = await postRepository.getById(post_id);
		if (!post) throw new BadRequestException('Post does not exist!');
		return true;
	}
}

export const validate = new Validate();