import { User } from '../../../models/User';
import { BadRequestException } from '../../errors/BadRequestException';

class Validate{
	required(value: string, message: string, status?: number){
		if (!value) throw new BadRequestException(`${message} is required`, status);
		return true;
	}

	async userIsRegistered(user: string){
		const userAlreadyExists = await User.findOne({user});
		if (userAlreadyExists) throw new BadRequestException('User already exists!');
		return true;
	}
}

export const validate = new Validate();