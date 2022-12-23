import { Types } from 'mongoose';
import { Post } from '../../models/Post';
import { Profile } from '../../models/Profile';
import { User } from '../../models/User';

interface Iprops{
	user_id: string
	profile_id: string
}

class FollowAndUnfollowProfileService {
	async execute({user_id, profile_id}: Iprops ) { 
		const handleprofile = await Profile.findById(profile_id);
		const currentProfile = await User.findById(user_id).populate('profile');

		if(!handleprofile?.followers.includes(currentProfile?.profile._id as Types.ObjectId)){
			await Profile.findByIdAndUpdate({_id: profile_id}, {$addToSet: {followers: currentProfile?.profile._id}}, { runValidators: true, new: true});

			await Profile.findByIdAndUpdate({_id: currentProfile?.profile._id}, {$addToSet: {following: handleprofile?._id}}, { runValidators: true, new: true});

			return `Agora você segue ${handleprofile?.name}`;
		}

		await Profile.findByIdAndUpdate({_id: profile_id}, {$pull: {followers: currentProfile?.profile._id}}, { runValidators: true, new: true});

		await Profile.findByIdAndUpdate({_id: currentProfile?.profile._id}, {$pull: {following: handleprofile?._id}}, { runValidators: true, new: true});

		return `Você deixou de seguir ${handleprofile?.name}`;
		
	}
}

export { FollowAndUnfollowProfileService };