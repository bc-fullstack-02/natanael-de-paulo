import { validate } from '.';
import { AuthUserType, UserType } from '../../types/UserTypes';

class ValidateUserBody{
	async create({user, password, profile, email}: UserType) {
		const fieldsToValidate = [
			{ name: 'user', value: user},
			{ name: 'password', value: password },
			{ name: 'email', value: email },
			{ name: 'name', value: profile.name}
		];
		validate.required(fieldsToValidate);
		await validate.userIsRegistered(user);
		await validate.emailIsRegistered(email);
		return true;
	}

	async auth({user, password, email}: AuthUserType){
		const fieldsToValidate = [
			{ name: 'user', value: user || email},
			{ name: 'password', value: password },
		];

		validate.required(fieldsToValidate);
		if(email) validate.emailFormat(email);
		return true;
	}
}

export const validateUserBody = new ValidateUserBody();