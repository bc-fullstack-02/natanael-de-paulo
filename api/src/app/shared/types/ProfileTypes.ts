import { Types } from 'mongoose';
import { UserType } from './UserTypes';

export type ProfileType = {
  _id?: string | Types.ObjectId
  name: string;
  image?: boolean;
  imageUrl?: string;
	user: Types.ObjectId;
  following: Types.ObjectId;
  followers: [Types.ObjectId]
} 

export type CreateProfileType = {
  newUser: UserType;
  profile: ProfileType;
}