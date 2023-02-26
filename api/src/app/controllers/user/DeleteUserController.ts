import { deleteUserService } from '../../services/user/DeleteUserService';
import { Request, Response } from 'express';

class DeleteUserController {
	async handle(req: Request, res: Response){
		const userDeleted = await deleteUserService.execute(req.user_id);
		
		res.json({
			msg: 'usuario deletado com sucesso!', 
			userDeleted
		});
	}
}

export const deleteUserController = new DeleteUserController();