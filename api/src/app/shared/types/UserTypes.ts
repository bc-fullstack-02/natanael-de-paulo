import { Types } from 'mongoose';
import { ProfileType } from './ProfileTypes';

export type UserType = {
	_id: Types.ObjectId | string;
	user: string;
	email: string;
  password: string;
  profile: ProfileType;
}

export type UserByIdType = Types.ObjectId | string;


export type UpdateUserType = {
	user: Partial<UserType>;
	profile: Partial<ProfileType>;
}

export type CreateUserType = Partial<UserType> 
& { passwordHash: string }

export type UpdateUserRepositoryType = {
	user: string;
	passwordHash: string;
	user_id:  Types.ObjectId | string;
}

export type DeleteUserType =  Partial<UserType> 

export type AuthUserType = {
	user: string;
	password: string;
	email: string;
}