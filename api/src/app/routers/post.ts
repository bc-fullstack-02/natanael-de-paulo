import { Router } from 'express';
import { CreatePostController } from '../controllers/post/CreatePostController';
import { PostListController } from '../controllers/post/PostListController';

export const PostRoutes = Router();

PostRoutes
	.get('/', new PostListController().handle)
	.post('/', new CreatePostController().handle);