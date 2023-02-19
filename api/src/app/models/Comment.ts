import {model, Schema} from 'mongoose';
import { CommentType } from '../shared/utils/types/CommentTypes';

const CommentSchema = new Schema<CommentType>({
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
});

export const Comment = model<CommentType>('Comment', CommentSchema);