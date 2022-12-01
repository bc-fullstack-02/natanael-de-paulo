import { model, Schema, Types } from 'mongoose';

interface IUser{
  name: string;
  user: string;
  password: string;
  following: [Types.ObjectId]
}

export const User = model<IUser>('User', new Schema<IUser>({
	name: {
		type: String,
		required: true,
		minlength: 2
	},
	user: {
		type: String,
		unique: true,
		required: true,
		minlength: 2
	},
	password: {
		type: String,
		required: true,
		minlength: 2  
	},
	following: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
}));