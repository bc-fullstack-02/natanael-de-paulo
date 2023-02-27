import {Request, Response} from 'express';
import { updateUserService } from '../../services/user/UpdateUserService';
import { BadRequestException } from '../../shared/errors/BadRequestException';


class UpdateUserController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const { user, password} = req.body;

		const userUpdated = await updateUserService.execute({user_id, user, password});

		res.json(userUpdated);
	}
}

export const updateUserController = new UpdateUserController();