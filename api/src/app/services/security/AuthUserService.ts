import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

interface AuthRequest {
	user: string;
	_id: Types.ObjectId;
	profile: Types.ObjectId
}

class AuthUserService {
	async execute( userData : AuthRequest) {

		const dataUser = {
			user: userData.user,
			profile: userData.profile
		};

		const token = jwt.sign(
			dataUser,
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

export { AuthUserService };