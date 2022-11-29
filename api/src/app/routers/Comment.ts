import { Router } from 'express';
import { createCommentController } from '../controllers/comment/CreateCommentController';
import { deleteCommentController } from '../controllers/comment/DeleteCommentController';
import { listCommentController } from '../controllers/comment/ListCommentController';

export const CommentRouters = Router();

CommentRouters
	.route('/:postId/comments')
	.get( listCommentController.handle )
	.post( createCommentController.handle );
CommentRouters
	.route('/:postId/comments/:id')
	.get()
	.put()
	.delete( deleteCommentController.handle );
// CommentRouters
// 	.route('/:postId/comments/:id/edit')
// 	.get();

// Se todas as rotas daqui forem envolver o/:postId. melhor usar o use dentro do Post