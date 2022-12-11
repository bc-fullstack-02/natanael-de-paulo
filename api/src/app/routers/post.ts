import { Router } from 'express';
import { createPostController } from '../controllers/post/CreatePostController';
import { deletePostController } from '../controllers/post/DeletePostController';
import { listPostController } from '../controllers/post/ListPostController';
import { listPostByIdController } from '../controllers/post/ListPostByIdController';
import { updatePostController } from '../controllers/post/UpdatePostController';

export const PostRoutes = Router();

PostRoutes
	.route('/')
	.get( listPostController.handle )
	.post( createPostController.handle );

PostRoutes
	.route('/:id')
	.get(listPostByIdController.handle )
	.delete(deletePostController.handle )
	.put(updatePostController.handle );



//{id}/like
//Criar rota para dar like em um determinado post