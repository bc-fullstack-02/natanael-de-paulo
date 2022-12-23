import {Request, Response} from 'express';
import { ListProfileService } from '../../services/profile/ListProfileService';

class ListProfileController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const listProfileService = new ListProfileService();
		const ProfileItems = await listProfileService.execute(user_id);
		
		res.json(ProfileItems);
	}
}

export const listProfileController  = new ListProfileController();