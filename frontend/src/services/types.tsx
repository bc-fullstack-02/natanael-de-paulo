export interface PostProps{
  _id: string;
  title: string;
  description: string;
  profile: ProfileProps;
  image: boolean;
  imagePath: string;
  comments: [];
  likes: [];
  createdAt: string;
  updatedAt: string;
}

export interface ProfileProps{
  _id: string;
  name: string;
  user: string;
  email: string;
  following: [];
  followers: [];
  image: boolean;
  imageUrl: string;
}

export interface UserProps {
  _id: string;
  profile: ProfileProps
}
