import {Request, Response} from 'express';
import { listProfileService } from '../../services/profile/ListProfileService';

class ListProfileController {
	async handle(req: Request, res: Response){
		const profiles = await listProfileService.execute();
		res.json(profiles);
	}
}

export const listProfileController  = new ListProfileController();