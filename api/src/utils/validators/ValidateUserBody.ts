import { validate } from '.';
import { CreateUserType } from '../types/UserTypes';

class ValidateUserBody{
	async create({user, password}: CreateUserType) {
		validate.required(user, 'user',400);
		validate.required(password, 'password',400);
		await validate.userIsRegistered(user);
    
		return true;
	}

	// async update(){
    
	// }
}

export const validateUserBody = new ValidateUserBody();