import { validate } from '.';
import { AuthUserType, CreateUserType } from '../types/UserTypes';

class ValidateUserBody{
	async create({user, password}: CreateUserType) {
		validate.required(user, 'user',400);
		validate.required(password, 'password',400);
		await validate.userIsRegistered(user);
    
		return true;
	}

	async auth({user, password}: AuthUserType){
		validate.required(user, 'user', 400);
		validate.required(password, 'password', 400);

		return true;
	}

	// async update(){
    
	// }
}

export const validateUserBody = new ValidateUserBody();