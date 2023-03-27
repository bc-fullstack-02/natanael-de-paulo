import { validate } from '.';

class ValidadeCommentBody{
	create(description: string){
		validate.field(description);
	}

	async fields(post_id: string, comment_id: string){
		await Promise.all([
			validate.postExists(post_id),
			validate.commentExists(comment_id)
		]);
	}
}

export const validadeCommentBody = new ValidadeCommentBody();