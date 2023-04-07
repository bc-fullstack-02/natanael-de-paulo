import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getUserByIdService } from '../../../services/user/GetUserByIdService';

export const upload = multer({ storage: multer.memoryStorage()});
const bucketName = 'first-bucket';
const config = {
	region: 'us-east-1',
	endpoint: process.env.BUCKET_ENDPOINT || 'http://localhost:9000',
	forcePathStyle: true,
	sslEnabled: false,
	signatureVersion: 'v4',
	credentials: {
		accessKeyId: process.env.BUCKET_ACCESS_KEY || 'ROOTUSER',
		secretAccessKey: process.env.BUCKET_SECRET_KEY || 'ROOTPASSWORD123'
	}
};
const s3Client = new S3Client(config);

export const uploadImageInMinioIO =  async (req: Request, res: Response, next: NextFunction) => {
	if (req.file) {
		const user = await getUserByIdService.execute(req.user_id);
		const filename = `${user.profile._id}/${req.file.originalname}`;
		return s3Client.send(new PutObjectCommand({
			Bucket: bucketName,
			Key: filename,
			ContentType: req.file.mimetype,
			Body: req.file.buffer
		}))
			.then(() => {
				req.body.image = true;
				req.body.imageUrl = `${process.env.BUCKET_HOST || config.endpoint}${bucketName}/${filename}`;
				return next();
			})
			.catch(next);
	} else {
		next();
	}
};
