import { Types } from 'mongoose';

export type UserType = {
  user: string;
  password: string;
  profile: Types.ObjectId
}

export type CreateUserType = {
	name?: string;
	user: string;
	password: string;
}