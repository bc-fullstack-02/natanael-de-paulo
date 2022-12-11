import { Request, Response } from 'express';
import { ListUsersService } from '../../services/user/ListUsersService';

class ListUsers{
	async handle(req: Request, res: Response) {

		const listUsersService = new ListUsersService();
		const users = await listUsersService.execute();
    
		return res.json(users);
	}
}


export const listUsers = new ListUsers();