import { CreateUserType } from '../../shared/utils/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';

class CreateUserService {
	async execute({ user, password, name }: CreateUserType) {
		const newUser = await userRepository.create({user, password, name});
		const userCreated = await userRepository.getById(newUser._id);
		return userCreated;
		// try {
		// 	const passwordHash = await bcrypt.hash(password, 10);
		// 	const newUser = await User.create({
		// 		user: user,
		// 		password: passwordHash
		// 	});

		// 	const newProfile = await Profile.create({
		// 		name: name || user,
		// 		user: newUser._id,
		// 	});
		
		// 	await User.findByIdAndUpdate(newUser._id, { profile: newProfile });
			
		// 	const newUserResponse = await User.findById(newUser._id).select('-password');
		// 	return newUserResponse;
		// } catch (error) {
		// 	return error;
		// }
	}
}

export { CreateUserService };