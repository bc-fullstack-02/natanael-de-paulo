import { Profile } from '../../models/Profile';

class DetailProfileUserService {
	async execute(user_id : string){
		const user = await Profile.findOne( { user: user_id}, {
			password: false
		});
    
		return user;
	}
}

export { DetailProfileUserService };