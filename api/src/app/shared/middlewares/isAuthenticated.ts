import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
interface PayLoad {
  sub: string;
}

export const isAuthenticated = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];

	if (!authHeader) return res.status(401).json({
		error: 'User not authenticated.'
	}).end();

	try {
		const { sub } = verify(
			String(token),
			String(process.env.JWT_SECRET)
		) as PayLoad;
		
		req.user_id  = sub;
		return next();
	} catch (err) {
		return res.status(401).json({
			error: 'Failed authenticated.'
		}).end();
	}
};