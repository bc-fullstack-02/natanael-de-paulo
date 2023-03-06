import {Request, Response} from 'express';
import { updateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController {
	async handle(req: Request, res: Response){
		const userUpdated = await updateUserService.update(req.body, req.user_id);
		res.json(userUpdated);
	}
}

export const updateUserController = new UpdateUserController();