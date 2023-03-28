import { app } from './app';
import { Server } from 'socket.io';
import { createServer } from 'http';
import MessageBroker from './app/shared/lib/messageBroker';
import jwt from 'jsonwebtoken';
import { AckOrNack, SubscriptionSession } from 'rascal';
import { User } from './app/models/User';
const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: '*'
	}
});

const liveData = io.of('/v1');

liveData.use((socket, next) => {
	alert('asdasdasd');

	if (socket.handshake.auth && socket.handshake.auth.token) {
		jwt.verify(socket.handshake.auth.token, String(process.env.JWT_SECRET), (err:any, user: any) => {
			if(err) return next(new Error('Authentication error'));
			User.findOne(user)
				.populate('profile')
				.then(u => {
					if(u) {
						(socket as any).profile = u.profile;
						console.log('socketodata', u.profile);
						next();
					} else {
						next(new Error('Authentication error'));
					}
				});
		});
	} else {
		next(new Error('Authentication error'));
	}
});

liveData.on('connection', (socket) => {

	console.log('socketodata', (socket as any).profile.name);
	
	socket.on('disconnect', () => {
		console.log(socket.connected);
	});
	socket.on('error', (err) => {
		console.error(err);
	});
	socket.emit('connect_profile', (socket as any).profile);
});

MessageBroker.sub().then((subscriptions) => {
	(subscriptions as SubscriptionSession[]).forEach((subscription) => {
		subscription.on('message', (message:any, content: any, ackOrNack: AckOrNack) => {
			ackOrNack();
		});
	});
});

// sub()
// 	.then((sub: any) => {
// 		sub.on('message', (message:any, content: any, ackOrNack: AckOrNack) => {
// 			ackOrNack();
// 			Object.entries(Object.fromEntries(liveData.sockets))
// 				.filter(([, v]) =>
// 					content.keys.includes((v as any).profile._id.toString())
// 				)
// 				.map(([k, v]) => {
// 					return v.emit(content.type, content.payload);
// 				});
// 		}) as Promise<SubscriptionSession>;
// 	}) 
// 	.catch(console.error);


const port = 3001;

httpServer.listen(process.env.PORT || port, () => {
	console.log(
		`🚀 Server is running on http://localhost:${process.env.PORT || port}`
	);
	console.log('ENV VARIABLES:');
	console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
	console.log(`PORT: ${process.env.PORT}`);
	console.log(`MONGO_URL: ${process.env.MONGO_URL}`);
});


