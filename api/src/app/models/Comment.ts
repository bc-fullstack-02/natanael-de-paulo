import {model, Schema, Types} from 'mongoose';

interface IComment {
	description: string;
	user: Types.ObjectId
	post: Types.ObjectId;
} 

export const Comment = model<IComment>('Comment', new Schema<IComment>({
	description: {
		type: String,
		required: true,
		minLength: 2
	},
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	post: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}
}));