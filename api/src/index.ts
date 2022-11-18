import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect( `${process.env.MONGODB || 'mongodb://localhost:27017/mydb'}_${
	process.env.NODE_ENV || 'development'
}`)
	.then(() => {
		const app = express();
		const port = 3001;
		app.use(cors());
		app.use(helmet());
		app.use(express.json());
		app.use(router);

		app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));
	})
	.catch(() => console.log('Erro in conection!'));






console.log('ENV VARIABLES:');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`MONGODB: ${process.env.MONGODB}`);
  