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



// import { NextFunction } from 'express';
// import { verify } from 'jsonwebtoken';
// import { Socket } from 'socket.io';
// // import { liveData } from '../../..';
// import { User } from '../../models/User';
// // import {verify} from 'jsonwebtoken';
// // import { User } from '../../models/User';

// // liveData.use((socket, next) => {
// // 	alert('asdasdasd');

// // 	if (socket.handshake.auth && socket.handshake.auth.token) {
// // 		verify(socket.handshake.auth.token, String(process.env.JWT_SECRET), async (err: any, user_id: any) => {
// // 			if(err) return next(new Error('Authentication error'));
// // 			const user = await User.findById(user_id).populate('profile');

// // 			console.log('socketodata', (user?.profile));

// // 			if(user) {
// // 				(socket as any).profile = user.profile;
// // 				console.log('socketodata', user.profile);
// // 				next();
// // 			} else {
// // 				next(new Error('Authentication error'));
// // 			}
// // 		});
// // 	} else {
// // 		next(new Error('Authentication error'));
// // 	}
// // });
