import { Request, Response } from 'express';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { deleteAllCommentService } from '../../services/comment/DeleteAllCommentService';
import { deleteAllPostService } from '../../services/post/DeleteAllPostService';
import { deleteProfileService } from '../../services/profile/DeleteProfileService';
import { deleteUserService } from '../../services/user/DeleteUserService';

class DeleteUserController {
	async handle(req: Request, res: Response){
		const user = await getUserByIdService.execute(req.user_id);

		await Promise.all([
			await deleteAllCommentService.execute(user.profile._id),
			await deleteAllPostService.execute(user.profile._id),
			await deleteProfileService.execute(user.profile._id),
			await deleteUserService.execute(user._id)
		]);

		res.status(204).json({
			msg: 'User deleted successfully!' 
		});
	}
}

export const deleteUserController = new DeleteUserController();