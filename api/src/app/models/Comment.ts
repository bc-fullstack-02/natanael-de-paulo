import {model, Schema, Types} from 'mongoose';

interface IComment {
	description: string;
	post: Types.ObjectId;
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
	}
}));