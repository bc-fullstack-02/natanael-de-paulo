import { Request, Response } from 'express';
import { User } from '../../models/User';
import { CreateUserService } from '../../services/security/CreateUserService';
import { BadRequestException } from '../../shared/errors/BadRequestException';


interface IUserProps{
	name: string;
	user: string;
	password: string;
}

class CreateUserController {
	async handle(req: Request, res: Response) {
		const userData  = req.body as IUserProps;

		if (!userData.user) throw new BadRequestException('User is required!');
		if (!userData.password) throw new BadRequestException ('Password is required!');

		const userAlreadyExists = await User.findOne({ user: userData.user});

		if (userAlreadyExists) throw new BadRequestException('User already exists!');

		const createUserService = new CreateUserService();
		
		const newUser = await createUserService.execute(
			userData 
		);

		return res.json(newUser);
	}
}

export const createUserController = new CreateUserController();