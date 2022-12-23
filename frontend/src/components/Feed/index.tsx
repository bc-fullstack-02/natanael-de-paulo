import { Text } from "../../components/Text";
import { AiOutlineUser, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import * as Dialog from '@radix-ui/react-dialog'
import { CreatePostButton } from '../../components/CreatePostButton'
import { CreatePostDialog } from '../../components/CreatePostDialog'

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

export function Feed() {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const [open, setOpen] = useState(false)
  const [posts, setPosts] = useState<PostProps[]>([])

  const authHeader = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    refreshListPost()
  }, [token])
  
  const closeDialog = () => {
    setOpen(!open)
  }

  const refreshListPost = async () => {
    const listPost = await api.get('/posts', authHeader );
    setPosts(listPost.data); 
  }
 
  const handleLike = async (post_id: string) => {
    try {
      await api.post(`/posts/${post_id}/like`, null, authHeader);
      refreshListPost()
    } catch (error) {
      console.error(error);
      }
  }

  const formatedDate = (timeStamp: string) => {
    const datePosted = new Date(timeStamp)
    const day = datePosted.getDate()
    const month = ("0" + datePosted.getMonth()).slice(-2)
    const year = ("0" + datePosted.getFullYear()).slice(-2)
    const hours = ("0" + datePosted.getHours()).slice(-2)
    const minutes = ("0" + datePosted.getMinutes()).slice(-2)
    const seconds = ("0" + datePosted.getSeconds()).slice(-2)

    return `${day}-${month}-${year} às ${hours}:${minutes}:${seconds}hrs`
  }
  
  return(
    <>
      <header className="border-y border-slate-400 pl-4 fixed top-0 w-full">
        <Text size="lg" className="font-extrabold"> Página Inicial </Text>
      </header>

      <div className='flex items-center border-b border-slate-200 gap-4 p-2 pl-4'>
        <div className="flex items-center my-2">
          <AiOutlineUser size={24} className="text-slate-50"/>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <CreatePostButton user={ user }/>
          <CreatePostDialog closeDialog={closeDialog} user={ user }/>
        </Dialog.Root>
      </div>

      <section className="">
        {posts && posts.map((post) => (
          <div className="border-b border-slate-400 pl-4 py-4" key={post._id}>
            <div className="flex items-center gap-2">
              <AiOutlineUser size={24} className="text-slate-50"/>
              <Text className="font-extrabold"> { post.profile.name }</Text>
              <div className="text-xs">
                {formatedDate(post.createdAt)}
              </div>
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
                <Text size="sm"> { post.comments.length } </Text>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineHeart size={24} className="hover:bg-sky-400 rounded-full p-1" onClick={() => handleLike(post._id)} />
                <Text size="sm"> { post.likes.length }</Text>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}