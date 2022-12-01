import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';


class CreateUserController {
	async handle(req: Request, res: Response) {
		const { name, user, password } = req.body;

		const createUserService = new CreateUserService();

		const userInfo = await createUserService.execute({
			name,
			user,
			password
		});

		return res.json(userInfo);
	}
}

export const createUserController = new CreateUserController();