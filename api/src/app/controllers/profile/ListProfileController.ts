import {Request, Response} from 'express';
import { ListProfileService } from '../../services/profile/ListProfileService';

class ListProfileController {
	async handle(req: Request, res: Response){
		const user_id = req.user_id;
		const listProfileService = new ListProfileService();
		const profiles = await listProfileService.execute(user_id);
		
		res.json(profiles);
	}
}

export const listProfileController  = new ListProfileController();