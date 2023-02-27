import { User } from '../../models/User';
import bcrypt from 'bcrypt';
import { Profile } from '../../models/Profile';

interface IProps {
	user_id: string;
  user: string;
  password: string;
}

class UpdateUserService{
	async execute({ user_id, password, user } : IProps ) { 
		const passwordHash = await bcrypt.hash(password, 10);

		await User.findByIdAndUpdate(user_id, {
			user: user,
			password: passwordHash
		});

		const updateUser = User.findById(user_id);
		return updateUser;
	}
}

export const updateUserService = new UpdateUserService();