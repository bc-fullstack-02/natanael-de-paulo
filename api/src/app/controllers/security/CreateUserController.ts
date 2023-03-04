import { Request, Response } from 'express';
import { validateUserBody } from '../../shared/utils/validators/ValidateUserBody';
import { createUserService } from '../../services/security/CreateUserService';
import { createProfileService } from '../../services/profile/CreateProfileService';
import { updateUserService } from '../../services/user/UpdateUserService';

class CreateUserController {
	async handle(req: Request, res: Response) {
		await validateUserBody.create(req.body);  
		const user = await createUserService.execute(req.body);
		const profile = await createProfileService.execute(user, req.body.profile);
		const userUpdated = await updateUserService.insertProfileInUser({ user, profile });
		return res.status(201).json(userUpdated);
	}
}

export const createUserController = new CreateUserController();