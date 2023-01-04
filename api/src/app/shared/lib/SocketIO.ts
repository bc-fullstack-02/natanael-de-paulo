import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { Socket } from 'socket.io';
import { liveData } from '../../..';
import { User } from '../../models/User';
// import {verify} from 'jsonwebtoken';
// import { User } from '../../models/User';

// liveData.use((socket, next) => {
// 	alert('asdasdasd');

// 	if (socket.handshake.auth && socket.handshake.auth.token) {
// 		verify(socket.handshake.auth.token, String(process.env.JWT_SECRET), async (err: any, user_id: any) => {
// 			if(err) return next(new Error('Authentication error'));
// 			const user = await User.findById(user_id).populate('profile');

// 			console.log('socketodata', (user?.profile));

// 			if(user) {
// 				(socket as any).profile = user.profile;
// 				console.log('socketodata', user.profile);
// 				next();
// 			} else {
// 				next(new Error('Authentication error'));
// 			}
// 		});
// 	} else {
// 		next(new Error('Authentication error'));
// 	}
// });

export const auth = (socket: Socket, next: NextFunction) => {
	const token = socket.handshake.auth && socket.handshake.auth.token;
	console.log('sockettoken', token);
	
	if (!token) next(new Error('Authentication error'));
	
	verify(socket.handshake.auth.token, String(process.env.JWT_SECRET), async (err: any, user_id: any) => {

		console.log('entrou aqui'!);
		
		if(err) return next(new Error('Authentication error'));
		const user = await User.findById(user_id).populate('profile');
		console.log('entrou aqui2'!);
		console.log('socketodata', (user?.profile));
		if(user) {
			(socket as any).profile = user.profile;
			console.log('socketodata', user.profile);
			next();
		} else {
			next(new Error('Authentication error'));
		}
	});
};