import { DeleteUserService } from '../../services/user/DeleteUserService';
import {Request, Response} from 'express';

class DeleteUserController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;

		const deleteUserService = new DeleteUserService();
		const userDeleted = await deleteUserService.execute(user_id);

		res.json({
			msg: 'usuario deletado com sucesso!', 
			userDeleted
		});
	}
}

export const deleteUserController = new DeleteUserController();