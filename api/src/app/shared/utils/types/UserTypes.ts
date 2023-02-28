import { Types } from 'mongoose';
import { ProfileType } from './ProfileTypes';

export type UserType = {
	_id?: Types.ObjectId | string;
	user: string
  password: string;
  profile: ProfileType
}

export type GetByIdUserType = Types.ObjectId | string;

export type CreateUserType = UserType

export type CreateUserRepositoryType = Pick<CreateUserType, 'user'> 
& { passwordHash: string }

export type UpdateUserRepositoryType = Pick<CreateUserType, 'user'> 
& { passwordHash: string }

export type AuthUserType = {
	user: string;
	password: string;
}

export type DeleteUserType  = Pick<UserType, '_id' | 'profile'>;
