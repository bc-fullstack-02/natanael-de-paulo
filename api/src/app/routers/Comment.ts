import { Router } from 'express';
import { createCommentController } from '../controllers/comment/CreateCommentController';
import { deleteCommentController } from '../controllers/comment/DeleteCommentController';
import { listCommentByIdController } from '../controllers/comment/ListCommentByIdController';
import { listCommentController } from '../controllers/comment/ListCommentController';
import { updateCommentController } from '../controllers/comment/UpdateCommentController';

export const CommentRouters = Router();

CommentRouters
	.route('/:postId/comments')
	.get( listCommentController.handle )
	.post( createCommentController.handle );
CommentRouters
	.route('/:postId/comments/:id')
	.get( listCommentByIdController.handle )
	.put( updateCommentController.handle )
	.delete( deleteCommentController.handle );
