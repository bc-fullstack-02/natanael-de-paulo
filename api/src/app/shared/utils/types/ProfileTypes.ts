import { Types } from 'mongoose';

export type ProfileType = {
  name: string;
  email: string;
  image: boolean;
  imageUrl: string;
	user: Types.ObjectId;
  following: Types.ObjectId;
  followers: [Types.ObjectId]
} 