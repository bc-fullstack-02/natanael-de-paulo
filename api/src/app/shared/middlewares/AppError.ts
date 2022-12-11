import { 
	NextFunction,
	Request,
	Response
} from 'express';
import { BadRequestException } from '../errors/BadRequestException';


export async function AppError (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof BadRequestException) {
		return res.status(err.status).json({
			message: err.message
		});
	}

	return res.status(500).json({
		status: 'error',
		message: `Internal Server Error - ${err.message}`
	});
  
	return next();
}