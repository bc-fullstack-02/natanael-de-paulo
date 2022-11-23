import { model, Schema, Types } from 'mongoose';
import { Redact } from './Redact';



export const Post = model('Post', new Schema({
	title: {
		type: String,
		required: [true, 'titulo obrigatorio'],
		minLength: [2, 'titulo no minimo 2']
	},
	description: {
		type: String,
		required: [true, 'descricao obrigatoria'],
		validate: { // bonus track
			validator: (val: string) => Redact
				.count({ term: val })
				.then((count: number)  => count === 0),
			message: 'nao pode usar a palavra {VALUE}'
		}
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
},{ timestamps: true }));