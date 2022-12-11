import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from '../../models/User';

interface AuthRequest {
  user: string;
  password: string;
}

class AuthUserService {
	async execute({ user, password }: AuthRequest) {
		const userInfo = await User.findOne({user}).where(user).equals(user);
    
		if (!userInfo) throw new Error('User or password is incorrect!');

		const passwordMatch = await compare(password, userInfo.password);

		if (!passwordMatch) throw new Error('User or password is incorrect!');

		const userData = {
			name: userInfo?.name,
			user: userInfo?.user
		};

		const token = jwt.sign(
			userData,
			String(process.env.JWT_SECRET),
			{
				subject: String(userInfo._id),
				expiresIn: '30d'
			}
		);


		console.log({
			id: userInfo?._id,
			name: userInfo?.name,
			user: userInfo?.user,
			token}
		);
    
		return {accessToken: token};
	}
}

export { AuthUserService };