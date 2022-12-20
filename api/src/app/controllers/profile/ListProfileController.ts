import {Request, Response} from 'express';
import { ListProfileService } from '../../services/profile/ListProfileService';

class ListProfileController {
	async handle(req: Request, res: Response){
		const listProfileService = new ListProfileService();
		const ProfileItems = await listProfileService.execute();
		
		res.json(ProfileItems);
	}
}

export const listProfileController  = new ListProfileController();