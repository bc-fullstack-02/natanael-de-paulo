import { validate } from '.';

class ValidateParams{
	async postId(post_id: string){
		await validate.postExists(post_id);
	}

	async commentId(comment_id: string){
		await validate.commentExists(comment_id);
	}
}

export const validateParams = new ValidateParams();