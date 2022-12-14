import { model, Schema, Types} from 'mongoose';
import { Redact } from './Redact';

export interface IPost {
	title: string;
	description: string;
	profile: Types.ObjectId
	comments: [Types.ObjectId];
	likes: [Types.ObjectId];
	image: boolean;
	imagePath: string;
} 

export const Post = model<IPost>('Post', new Schema<IPost>({
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
},{ timestamps: true }));