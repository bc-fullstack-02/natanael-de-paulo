export type PostProps = {
  _id: string;
  title: string;
  description: string;
  profile: ProfileProps;
  image: boolean;
  imagePath: string;
  comments: [ProfileProps | any];
  likes: [ProfileProps | any];
  createdAt: string;
  updatedAt: string;
}

export type LoginUserProps = Pick<UserProps, "password" | "user">

export type ProfileProps = {
  _id: string;
  name: string;
  user: string;
  following: [ProfileProps | any];
  followers: [ProfileProps | any];
  image: boolean;
  imageUrl: string;
}

export type UserProps = {
  _id: string;
  user: string;
  password: string;
  email: string;
  profile: ProfileProps
}
