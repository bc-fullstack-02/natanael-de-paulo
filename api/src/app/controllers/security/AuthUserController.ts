import { Request, Response } from 'express';
import { authUserService } from '../../services/security/AuthUserService';
import { validateUserBody } from '../../shared/utils/validators/ValidateUserBody';

class AuthUserController {
	async handle(req: Request, res: Response) {
		await validateUserBody.auth(req.body);  
		const auth = await authUserService.execute(req.body);
		return res.json(auth);
	}
}

export const authUserController = new AuthUserController();