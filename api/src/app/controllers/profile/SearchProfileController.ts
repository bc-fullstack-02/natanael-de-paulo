import {Request, Response} from 'express';
import { SearchProfileService } from '../../services/profile/SearchProfileService';


class SearchProfileController {
	async handle(req: Request, res: Response){
		const q = req.query.q as string;
		const searchProfileService = new SearchProfileService();
		const ProfileItems = await searchProfileService.execute(q);
		
		res.json(ProfileItems);
	}
}

export const searchProfileController  = new SearchProfileController();
