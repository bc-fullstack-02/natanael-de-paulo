import { useEffect, useState } from 'react'
import { Feed } from '../../components/Feed'
import { Friends } from '../../components/Friends'
import { Theme } from '../../components/Theme'
import { api } from '../../services/api';
import { AuthHeader } from '../../services/authHeader';
import { PostProps } from '../../services/types';

export function Home(){
  // const userData = localStorage.getItem('userData');
  // console.log(userData);
  
  // const data = JSON.parse(userData);
  // console.log(data);
const user = 'Nata'  
  const [posts, setPosts] = useState<PostProps[]>([])
  const authHeader = AuthHeader()

  useEffect(() => {
    refreshListPost()
  }, [])
  
  const refreshListPost = async () => {
    const listPost = await api.get('/feed', authHeader );
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

  return (
    <Theme>
      <div className='flex w-full gap-4'>
        <div className='basis-5/6 h-full flex flex-col overflow-y-auto scroll-hidden-display gap-2'>
          <header className='sticky top-0 border border-slate-400'>Pagina inicial</header>
          <Feed posts={posts} user={user} handleLike={handleLike} refreshListPost={refreshListPost}/>
        </div>

        <div className='basis-2/6 p-3 flex flex-col items-center border-l border-slate-400'>
          <div className='bg-red-100 '>
              sugestoes para voce
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </Theme>
  )
}