import { User } from '../../models/User';
import bcrypt from 'bcrypt';

interface UserRequest {
  name: string;
  user: string;
  password: string;
}

class CreateUserService {
	async execute({ name, user, password }: UserRequest) {
		
		const userAlreadyExists = await User.findOne({user}).where(user).equals(user);

		if (userAlreadyExists) throw new Error('User already exists!');

		const passwordHash = await bcrypt.hash(password, 10);

		const userAccount = await User.create({
			name: name,
			user: user,
			password: passwordHash
		});

		return userAccount;
	}
}

export { CreateUserService };