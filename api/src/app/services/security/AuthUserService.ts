import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { userRepository } from '../../repository/UserRepository';
import { BadRequestException } from '../../shared/errors/BadRequestException';
import { AuthUserType } from '../../shared/utils/types/UserTypes';

class AuthUserService {
	async execute({user, password} : AuthUserType) {
		const userData = await userRepository.findUser(user);
		if (!userData) throw new BadRequestException('User or password is incorrect!');
		const passwordMatch = await compare(password, userData.password);
		if (!passwordMatch) throw new BadRequestException('User or password is incorrect!');
		
		const token = jwt.sign(
			{
				user: userData.user,
				profile: userData.profile
			},
			String(process.env.JWT_SECRET),
			{
				subject: String(userData._id),
				expiresIn: '30d',
			}
		);
		// console.log({
		// 	id: userData?._id,
		// 	name: userData?.name,
		// 	user: userData?.user,
		// 	token}
		// );
    
		return { token };
	}
}

export  const authUserService = new AuthUserService();