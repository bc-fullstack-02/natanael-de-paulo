import { model, Schema } from 'mongoose';
import { UserType } from '../shared/types/UserTypes';

const UserSchema = new Schema<UserType>({
	user: {
		type: String,
		unique: true,
		required: true,
		minlength: 2
	},
	password: {
		type: String,
		required: true,
		minlength: 2,
		select: false
	},
	profile: {
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}
});

export const User = model<UserType>('User', UserSchema);