import { model, Schema } from 'mongoose';

interface IRedact {
	term: string;
} 

export const Redact = model<IRedact>('Redact', new Schema<IRedact>({
	term: {
		type: String,
		required: true,
		minLength: 2
	}
}));