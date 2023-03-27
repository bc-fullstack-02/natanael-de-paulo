import { Types } from 'mongoose';
import { PostType } from './PostTypes';
import { ProfileType } from './ProfileTypes';

export type CommentType = {
	_id: Types.ObjectId | string
	description: string;
	post: Types.ObjectId;
	profile: Types.ObjectId;
	likes: [Types.ObjectId];
} 

export type CommentByIdType = Types.ObjectId | string;

export type CreateCommentType = {
	post: PostType;
	profile: ProfileType;
	description: string;
}