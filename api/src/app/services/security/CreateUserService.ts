import { User } from '../../models/User';
import bcrypt from 'bcrypt';
import { Profile } from '../../models/Profile';

// interface UserRequest {
//   name: string;
//   user: string;
//   password: string;
// 	email?: string;
// 	image?: boolean;
// 	imageUrl?: string;
// }

interface IUserProps{
	name: string;
	user: string;
	password: string;
}


class CreateUserService {
	async execute({ user, password, name }: IUserProps) {
		try {
			const passwordHash = await bcrypt.hash(password, 10);

			const newUser = await User.create({
				user: user,
				password: passwordHash
			});

			const newProfile = await Profile.create({
				name: name || user,
				user: newUser._id,
			});
		
			await User.findByIdAndUpdate(newUser._id, { profile: newProfile });

			const newUserResponse = await User.findById(newUser._id);
			return newUserResponse;
		} catch (error) {
			return error;
		}
	}
}

export { CreateUserService };