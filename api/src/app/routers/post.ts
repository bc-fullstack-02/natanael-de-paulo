import { Router } from 'express';
import { createPostController } from '../controllers/post/CreatePostController';
import { deletePostController } from '../controllers/post/DeletePostController';
import { listPostController } from '../controllers/post/ListPostController';
import { listPostByIdController } from '../controllers/post/ListPostByIdController';

export const PostRoutes = Router();

PostRoutes
	.route('/posts')
	.get( listPostController.handle )
	.post( createPostController.handle );

PostRoutes
	.route('/posts/:id')
	.get( listPostByIdController.handle )
	.delete(deletePostController.handle);


// PostRoutes
// 	.route('/posts/:id')
// 	.put(PostController.save)
// 	

// PostRoutes
// 	.route('/posts/:id/edit')
// 	.get(PostController.edit);