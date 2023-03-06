import { Request, Response } from 'express';
import { getUserByIdService } from '../../services/user/GetUserByIdService';

class GetUserByIdController {
	async handle(req: Request, res: Response) {
		const user = await getUserByIdService.execute(req.user_id);
		return res.json(user);
	}
}

export const getUserByIdController = new GetUserByIdController();