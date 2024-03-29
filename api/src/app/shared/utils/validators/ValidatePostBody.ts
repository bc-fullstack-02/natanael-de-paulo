import { validate } from '.';
import { PostType } from '../../types/PostTypes';

class ValidatePostBody {
	create({title, description}: PostType){
		const fieldsToValidate = [
			{ name: 'title', value: title},
			{ name: 'description', value: description }
		];
    
		validate.required(fieldsToValidate);
	}
}

export const validatePostBody = new ValidatePostBody();