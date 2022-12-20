import {model, Schema, Types} from 'mongoose';

interface IProfile {
  name: string;
  email: string;
  image: boolean;
  imageUrl: string;
	user: Types.ObjectId;
  following: Types.ObjectId;
  followers: [Types.ObjectId]
} 

export const Profile = model<IProfile>('Profile', new Schema<IProfile>({
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
}));