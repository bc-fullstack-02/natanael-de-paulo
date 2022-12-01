import { User } from '../../models/User';
import bcrypt from 'bcrypt';

interface UserRequest {
  name: string;
  user: string;
  password: string;
}

class CreateUserService {
	async execute({ name, user, password }: UserRequest) {
		if (!name) throw new Error('Name is required!');
		if (!user) throw new Error('Email is required!');
		if (!password) throw new Error('Password is required!');
    
		const userAlreadyExists = await User.findOne({
			where: {
				user: user
			}
		});

		if (userAlreadyExists) throw new Error('Email already exists!');

		const passwordHash = await bcrypt.hash(password, 8);

		const userAccount = await User.create({
			name: name,
			user: user,
			password: passwordHash
		});

		return userAccount;
	}
}

export { CreateUserService };