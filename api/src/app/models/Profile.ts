import {model, Schema} from 'mongoose';
import { ProfileType } from '../shared/utils/types/ProfileTypes';

const ProfileSchema = new Schema<ProfileType>({
	name: {
		type: String,
		required: true,
		minLength: 2
	},
	email: {
		type: String,
		minLength: 2
	},
	image: {
		type: Boolean,
		default: false
	},
	imageUrl: {
		type: String,
		minLength: 2
	},
	user: {
		required: true,
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	following: [{
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}],
	followers: [{
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}]
});

export const Profile = model<ProfileType>('Profile', ProfileSchema);