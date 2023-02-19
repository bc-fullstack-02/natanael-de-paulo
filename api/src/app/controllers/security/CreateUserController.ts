import { Request, Response } from 'express';
import { validateUserBody } from '../../shared/utils/validators/ValidateUserBody';
import { createUserService } from '../../services/security/CreateUserService';

class CreateUserController {
	async handle(req: Request, res: Response) {
		await validateUserBody.create(req.body);  
		const newUser = await createUserService.execute(req.body);
		return res.json(newUser);
	}
}

export const createUserController = new CreateUserController();