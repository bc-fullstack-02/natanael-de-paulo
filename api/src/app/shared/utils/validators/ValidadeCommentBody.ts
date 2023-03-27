import { validate } from '.';

class ValidadeCommentBody{
	create(description: string){
		validate.field(description);
	}
}

export const validadeCommentBody = new ValidadeCommentBody();