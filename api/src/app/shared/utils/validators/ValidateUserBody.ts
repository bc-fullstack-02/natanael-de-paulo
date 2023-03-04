import { validate } from '.';
import { AuthUserType, UserType } from '../../types/UserTypes';

class ValidateUserBody{
	async create({user, password, profile, email}: UserType) {
		validate.required(user, 'user',400);
		validate.required(password, 'password',400);
		validate.required(email, 'email',400);
		validate.required(profile.name, 'name', 400);
		validate.emailFormat(email);
		
		await validate.userIsRegistered({user, email});
    
		return true;
	}

	async auth({user, password, email}: AuthUserType){
		if(user || email) {
			if(user) validate.required(user, 'user', 400);
			if(email) validate.emailFormat(email);
		}
		validate.required(password, 'password', 400);

		return true;
	}

	// async update(){
    
	// }
}

export const validateUserBody = new ValidateUserBody();