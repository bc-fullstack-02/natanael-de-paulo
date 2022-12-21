import { Router } from 'express';
import { createCommentController } from '../controllers/comment/CreateCommentController';
import { deleteCommentController } from '../controllers/comment/DeleteCommentController';
import { likeAndUnlikeCommentController } from '../controllers/comment/LikeAndUnlikeCommentController';
import { listCommentByIdController } from '../controllers/comment/ListCommentByIdController';
import { listCommentController } from '../controllers/comment/ListCommentController';
import { updateCommentController } from '../controllers/comment/UpdateCommentController';

export const CommentRouters = Router();

CommentRouters
	.route('/:post_id/comments')
	.get( listCommentController.handle )
	.post( createCommentController.handle );
CommentRouters
	.route('/:post_id/comments/:comment_id')
	.get( listCommentByIdController.handle )
	.put( updateCommentController.handle )
	.delete( deleteCommentController.handle );

CommentRouters
	.route('/:post_id/comments/:comment_id/like')
	.post( likeAndUnlikeCommentController.handle );


//{postId}/comments/{id}/like
//Criar rota para dar like em um determinado comentario