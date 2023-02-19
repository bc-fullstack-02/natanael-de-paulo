import { model, Schema } from 'mongoose';
import { UserType } from '../shared/utils/types/UserTypes';

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
		minlength: 2  
	},
	profile: {
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}
});

export const User = model<UserType>('User', UserSchema);