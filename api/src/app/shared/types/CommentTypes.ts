import { Types } from 'mongoose';
import { PostByIdType, PostType } from './PostTypes';
import { ProfileType } from './ProfileTypes';

export type CommentType = {
	_id: Types.ObjectId | string
	description: string;
	post: Types.ObjectId;
	profile: Types.ObjectId;
	likes: [Types.ObjectId];
} 

export type CommentByIdType = string | Types.ObjectId;

export type CreateCommentType = {
	post: PostType;
	profile: ProfileType;
	description: string;
}

export type DeleteCommentType = {
	post_id: PostByIdType;
	comment_id: CommentByIdType;
}