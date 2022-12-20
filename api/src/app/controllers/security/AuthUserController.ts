import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../../models/User';
import { AuthUserService } from '../../services/security/AuthUserService';
import { BadRequestException } from '../../shared/errors/BadRequestException';

interface IProps{
	user: string;
	password: string;
}

class AuthUserController {
	async handle(req: Request, res: Response) {
		const {user, password }: IProps = req.body;
		const authUserService = new AuthUserService();

		const userData = await User.findOne({user}).where('user').equals(user);

		if (!userData) throw new BadRequestException('User or password is incorrect!');

		const passwordMatch = await compare(password, userData.password);
		
		if (!passwordMatch) throw new BadRequestException('User or password is incorrect!');

		const auth = await authUserService.execute(userData);

		return res.json(auth);
	}
}

export const authUserController = new AuthUserController();