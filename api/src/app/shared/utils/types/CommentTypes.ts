import { Types } from 'mongoose';

export type CommentType = {
	description: string;
	user: Types.ObjectId
	post: Types.ObjectId;
	profile: Types.ObjectId;
	likes: [Types.ObjectId];
} 