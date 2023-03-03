import { AiOutlineComment, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { PostProps } from "../../services/types";

import { Text } from "../Text";
import img from "../../assets/1655240397925.jpg"
import user from "../../assets/NIKON-5-PhotoRoom.png"
interface Props{
  post: PostProps
  handleLike: (post_id: string) => void
}

export function PostItems({ post, handleLike }: Props ){
 
  return(
    <>
      <div className="border-b border-slate-400 pl-4 py-4" key={post._id}>
        <div className="flex items-center gap-2">
          
          <div className="rounded-[50%] w-9 h-9 bg-teal-200  overflow-hidden">
            { true ? <img src={user} alt="" width={32} height={32} className='object-contain w-full h-full' /> :
            <AiOutlineUser size={24} className="text-slate-50"/> }
          </div>
          <Text className="font-extrabold"> { post.profile.name }</Text>
          <div className="text-xs">
            {post.createdAt}
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

        { post.image ? (
          <div className="w-full h-[30em] ">
            <img src={img} alt='imagem' className="w-full h-full flex rounded object-scale-down" />
          </div>
        ) : null }

        <div className="flex gap-4 mt-3 ml-3 items-center">
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
    </>
  )
}