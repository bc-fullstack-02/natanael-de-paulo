import { app } from './app';
import { Server }  from 'socket.io';
import { createServer } from 'http';

const server = createServer(app);
const io = new Server(server ,{
	cors: {
		origin: '*'
	}
});

const port = 3002;

io.on('connection', (socket) => console.log('socket', socket.id));

server.listen(process.env.PORT || port, () => {
	console.log(`🚀 Server is running on http://localhost:${process.env.PORT || port}`);
	console.log('ENV VARIABLES:');
	console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
	console.log(`PORT: ${process.env.PORT}`);
	console.log(`MONGO_URL: ${process.env.MONGO_URL}`);
});





