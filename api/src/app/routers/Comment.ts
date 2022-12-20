import { Router } from 'express';
import { createCommentController } from '../controllers/comment/CreateCommentController';
import { deleteCommentController } from '../controllers/comment/DeleteCommentController';
import { listCommentByIdController } from '../controllers/comment/ListCommentByIdController';
import { listCommentController } from '../controllers/comment/ListCommentController';
import { updateCommentController } from '../controllers/comment/UpdateCommentController';
import { isAuthenticated } from '../shared/middlewares/isAuthenticated';

export const CommentRouters = Router();

CommentRouters
	.route('/:post_id/comments')
	.get( listCommentController.handle )
	.post( isAuthenticated, createCommentController.handle );
CommentRouters
	.route('/:post_id/comments/:id')
	.get( listCommentByIdController.handle )
	.put( isAuthenticated, updateCommentController.handle )
	.delete(isAuthenticated, deleteCommentController.handle );

//{postId}/comments/{id}/like
//Criar rota para dar like em um determinado comentario