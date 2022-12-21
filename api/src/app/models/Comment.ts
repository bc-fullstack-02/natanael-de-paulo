import {model, Schema, Types} from 'mongoose';

interface IComment {
	description: string;
	user: Types.ObjectId
	post: Types.ObjectId;
	profile: Types.ObjectId;
	likes: [Types.ObjectId];
} 

export const Comment = model<IComment>('Comment', new Schema<IComment>({
	description: {
		type: String,
		required: true,
		minLength: 2
	},
	post: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	},
	profile: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Profile'
	},
	likes: [{
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}]
}));