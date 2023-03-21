import { UpdateUserType} from '../../shared/types/UserTypes';
import { userRepository } from '../../repository/UserRepository';

class InsertProfileInUser{
	async execute({user, profile}: UpdateUserType) { 
		const userUpdated = await userRepository.insetProfileInUser({user, profile});
		return userUpdated;
	}
}

export const insertProfileInUser = new InsertProfileInUser();