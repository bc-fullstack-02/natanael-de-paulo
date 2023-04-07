import { Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import { profileRepository } from '../../repository/ProfileRepository';
import { ExtendedError } from 'socket.io/dist/namespace';

export const socketAuth = (socket: Socket, next: (err?: ExtendedError | undefined) => void) => {
	if (socket.handshake.auth && socket.handshake.auth.token) {
		jwt.verify(socket.handshake.auth.token, String(process.env.JWT_SECRET), async (err: unknown, decodedToken: any) => {
			if(err) return next(new Error('Authentication error'));			
			const profile = await profileRepository.getById(decodedToken.profile);
			if(!profile){
				next(new Error('Authentication error1'));
			}
			socket.data.profile = profile;
			next();
		});
	} else {
		next(new Error('Authentication error2'));
	}
};
