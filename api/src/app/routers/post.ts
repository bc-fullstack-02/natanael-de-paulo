import { Router } from 'express';
import { createPostController } from '../controllers/post/CreatePostController';
import { listPostController } from '../controllers/post/ListPostController';
import { NewPostController } from '../controllers/post/ShowPostController';

export const PostRoutes = Router();

PostRoutes
	.route('/posts')
	.get( listPostController.handle  );
// 	.post( createPostController.handle );

// PostRoutes
// 	.route('/posts/:_id')
// 	.get( new NewPostController().handle );


// PostRoutes
// 	.route('/posts/:id')
// 	.get(PostController.show)
// 	.put(PostController.save)
// 	.delete(PostController.delete);

// PostRoutes
// 	.route('/posts/:id/edit')
// 	.get(PostController.edit);