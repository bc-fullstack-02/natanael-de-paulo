import { User } from '../../models/User';
import bcrypt from 'bcrypt';
import { Profile } from '../../models/Profile';
import { CreateUserType } from '../../../utils/types/UserTypes';

class CreateUserService {
	async execute({ user, password, name }: CreateUserType) {
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
			
			const newUserResponse = await User.findById(newUser._id).select('-password');
			return newUserResponse;
		} catch (error) {
			return error;
		}
	}
}

export { CreateUserService };