import { model, Schema} from 'mongoose';
import { PostType } from '../shared/utils/types/PostTypes';
import { Redact } from './Redact';

const PostSchema =  new Schema<PostType>({
	title: {
		type: String,
		required: true,
		minLength: [2, 'Titulo no minimo 2']
	},
	description: {
		type: String,
		required: true,
		// validate: {
		// 	validator: (val: string) => Redact
		// 		.count({ term: val })
		// 		.then((count: number)  => count === 0),
		// 	message: 'nao pode usar a palavra {VALUE}'
		// }
	},
	image: {
		type: Boolean,
		default: false
	},
	imagePath:{
		type: String,
	},
	profile: {
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	likes: [{
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}]
},{ timestamps: true });

export const Post = model<PostType>('Post', PostSchema);