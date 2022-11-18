import { model, Schema } from 'mongoose';

export const Redact = model('Redact', new Schema({
	term: {
		type: String,
		required: true,
		minLength: 2
	}
}));