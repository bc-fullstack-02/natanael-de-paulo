import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';
import { BadRequestException } from '../../shared/errors/BadRequestException';


class CreateUserController {
	async handle(req: Request, res: Response) {
		const { name, user, password } = req.body;

		if (!name) throw new BadRequestException ('Name is required!');
		if (!user) throw new BadRequestException('Email is required!');
		if (!password) throw new BadRequestException('Password is required!');

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