import { Router } from 'express';

import { createPostController } from '../controllers/post/CreatePostController';
import { deletePostController } from '../controllers/post/DeletePostController';
import { listPostController } from '../controllers/post/ListPostController';
import { listPostByIdController } from '../controllers/post/ListPostByIdController';
import { updatePostController } from '../controllers/post/UpdatePostController';
import { likeAndUnlikePostController} from '../controllers/post/LikeAndUnlikePostController';
// import multerConfig from '../config/multer';
// import multer from 'multer';
import { upload, uploadImageInMinioIO} from '../shared/lib/minioIO/multerUploadMiddleware';

export const PostRoutes = Router();
// const upload = multer(multerConfig);


PostRoutes
	.route('/')
	.get(listPostController.handle)
	.post(upload.single('file'), uploadImageInMinioIO, createPostController.handle);

PostRoutes
	.route('/:post_id')
	.get(listPostByIdController.handle)
	.delete(deletePostController.handle)
	.put(updatePostController.handle);

PostRoutes
	.route('/:post_id/like')
	.post(likeAndUnlikePostController.handle);
	