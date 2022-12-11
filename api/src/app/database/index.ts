import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export const ConnectDb = mongoose.connect(
	`${process.env.MONGO_URL || 'mongodb://localhost:27017/mydb'}_${
		process.env.NODE_ENV || 'development'
	}`,
	// https://mongoosejs.com/docs/connections.html#options
	{
		serverSelectionTimeoutMS: !process.env.NODE_ENV ? 1000 : 30000,
	} // Keep trying to send operations for 5 seconds
);

mongoose.connection.on('error', () => {
	console.error('Mongo not connected');
});
mongoose.connection.on('connected', () => {
	console.info('Mongo connected');
});
mongoose.connection.on('disconnected', () => {
	console.error('Mongo disconnected');
});

