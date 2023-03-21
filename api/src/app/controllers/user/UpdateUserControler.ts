import {Request, Response} from 'express';
import { getUserByIdService } from '../../services/user/GetUserByIdService';
import { updateUserService } from '../../services/user/UpdateUserService';
import { UserType } from '../../shared/types/UserTypes';

class UpdateUserController {
	async handle(req: Request, res: Response){
		const user: UserType = await getUserByIdService.execute(req.user_id);
		const userUpdated = await updateUserService.execute(req.body, user._id);
		res.status(200).json(userUpdated);
	}
}

export const updateUserController = new UpdateUserController();