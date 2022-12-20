import { User } from '../../models/User';

class ListUsersService{
	async execute(){
		const usersList = await User.find({});
		return usersList;
	}
}

export { ListUsersService };