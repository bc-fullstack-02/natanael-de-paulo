import { Request, Response } from 'express';
import { DetailProfileUserService } from '../../services/user/DetailProfileUserService';

class DetailProfileUserController {
	async handle(req: Request, res: Response) {
		const user_id = req.user_id;
		const detailProfileUserService = new DetailProfileUserService();
		const user = await detailProfileUserService.execute(user_id);
		return res.json(user);
	}
}

export const detailProfileUserController = new DetailProfileUserController();