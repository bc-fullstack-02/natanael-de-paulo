import { liveData } from '../../../../app';

liveData.on('connection', (socket) => {
	socket.on('connect', () => {
		console.log('conn', socket.connected);
	});
	
	socket.on('disconnect', () => {
		console.log('disc', socket.disconnect);
	});

	socket.on('error', (err) => {
		console.error('err', err);
	});
	
	socket.emit('connect_profile', socket.data.profile);
});