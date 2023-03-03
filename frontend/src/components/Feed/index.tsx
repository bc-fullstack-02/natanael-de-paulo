import { AiOutlineUser } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import * as Dialog from '@radix-ui/react-dialog'
import { CreatePostButton } from '../../components/CreatePostButton'
import { CreatePostDialog } from '../../components/CreatePostDialog'
import { AuthHeader } from "../../services/authHeader";
import { PostItems } from "../PostItems";
import { PostProps } from '../../services/types';


interface IProps{
  posts: PostProps[]
  user: string
  handleLike: (post_id: string) => Promise<void>
  refreshListPost: () => Promise<void>
}

export function Feed({posts, handleLike, user, refreshListPost} : IProps) {
  const [open, setOpen] = useState(false)
  const closeDialog = () => {
    setOpen(!open)
  }

  // const formatedDate = (timeStamp: string) => {
  //   const datePosted = new Date(timeStamp)
  //   const day = datePosted.getDate()
  //   const month = ("0" + datePosted.getMonth()).slice(-2)
  //   const year = ("0" + datePosted.getFullYear()).slice(-2)
  //   const hours = ("0" + datePosted.getHours()).slice(-2)
  //   const minutes = ("0" + datePosted.getMinutes()).slice(-2)
  //   const seconds = ("0" + datePosted.getSeconds()).slice(-2)

  //   return `${day}-${month}-${year} às ${hours}:${minutes}:${seconds}hrs`
  // }
  
  return(
    <>
      <div className='flex items-center justify-center border border-slate-200 gap-4 p-2 pl-4'>
        <div className="flex items-center my-2">
          <AiOutlineUser size={24} className="text-slate-50"/>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <CreatePostButton user={ user } />
          <CreatePostDialog closeDialog={closeDialog} user={ user } setOpen={setOpen} open={open} refreshListPost={refreshListPost}/>
        </Dialog.Root>
      </div>

      <div className="border border-slate-400 my-8"></div>

      <section className="">
        {posts && posts.map((post) => (
          <PostItems post={post} handleLike={handleLike}/>
        ))}
      </section>
    </>
  )
}