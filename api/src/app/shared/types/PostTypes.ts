import { Types } from 'mongoose';
import { ProfileType } from './ProfileTypes';

export type PostType = {
	title: string;
	description: string;
	profile: Types.ObjectId
	comments: [Types.ObjectId];
	likes: [Types.ObjectId];
	image: boolean;
	imagePath: string;
} 

export type PostByIdType = Types.ObjectId | string;

export type CreatePostType = {
	title: string;
	description: string;
	profile: ProfileType;
	imagePath: string;
}

export type DeletePostType = {
	profile: ProfileType;
	post_id: Types.ObjectId | string;
}