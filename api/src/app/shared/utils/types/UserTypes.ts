import { Types } from 'mongoose';

export type UserType = {
  user: string;
  password: string;
  profile: Types.ObjectId
}

export type GetByIdUserType = Types.ObjectId | string

export type CreateUserType = {
	name?: string;
	user: string;
	password: string;
}

export type AuthUserType = {
	user: string;
	password: string;
}
