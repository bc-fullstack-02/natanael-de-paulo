import { useNavigate } from "react-router-dom";
import { AiOutlineComment, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface ProfileProps{
  _id: string;
  name: string;
  user: string;
  email: string;
}

interface PostProps{
  _id: string;
  title: string;
  description: string;
  profile: ProfileProps;
  comments: [];
  likes: [];
  createdAt: string;
  updatedAt: string;
}



export function Profile(){
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

  const [myPosts, setMyPosts] = useState<PostProps[]>([])

  const authHeader = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  } 

  useEffect(() => {
    const loadMyPosts = async ()  => {
      const response = await api.get('/posts', authHeader)
      setMyPosts(response.data)
    };
  
    loadMyPosts()
  }, [token])

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }

  return(
    <div className="basis-5/6">
        <Heading className="border-b border-slate-400 py-2 pl-5  flex justify-between w-full">
          <div className="flex items-center gap-2">
            <AiOutlineUser size={32} className="text-slate-50"/>
            <Text asChild={false} className="font-extrabold">{ user }</Text>
          </div>

          <Button className="max-w-[15em]" onClick={logout}>
            Sair  
          </Button>
        </Heading>

        <section className="">
        {myPosts && myPosts.map((post) => (
          <div className="border-b border-slate-400 pl-4 py-4" key={post._id}>
            <div className="flex items-center">
              <AiOutlineUser size={24} className="text-slate-50"/>
              <Text asChild={false} className="font-extrabold ml-2">{ post.profile.name }</Text>
            </div>
            <Text asChild={true}>
              <h2 className="ml-4 my-2 font-extrabold">
                { post.title }
              </h2>
            </Text>
            <Text asChild={true} size="sm" className="text-slate-300">
              <p className="ml-4 my-2 break-words whitespace-pre-wrap">
                { post.description }
              </p>
            </Text>
            <div className="flex gap-4 ml-3 items-center">
              <div className="flex gap-2 items-center">
                <AiOutlineComment size={24} className="hover:bg-sky-400 rounded-full p-1"/>
                <Text asChild={false} size="sm"> { post.comments.length } </Text>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineHeart size={24} className="hover:bg-sky-400 rounded-full p-1" />
                <Text asChild={false} size="sm"> { post.likes.length }</Text>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
    
  )
}