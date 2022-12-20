import { model, Schema, Types } from 'mongoose';

interface IUser{
  user: string;
  password: string;
  profile: Types.ObjectId
}

export const User = model<IUser>('User', new Schema<IUser>({
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
	profile: {
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}
}));