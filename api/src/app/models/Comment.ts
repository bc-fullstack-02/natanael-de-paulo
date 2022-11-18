import { model, Schema} from 'mongoose';

export const Comment = model('Comment', new Schema({
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