import { Feed } from '../../components/Feed'
import { Friends } from '../../components/Friends'
import { Theme } from '../../components/Theme'

export function Home(){
  return (
    <Theme>
      <div className='flex w-full gap-4'>
        <div className='basis-5/6 h-full flex flex-col overflow-y-auto scroll-hidden-display gap-2'>
          <header className='sticky top-0 border border-slate-400'>Pagina inicial</header>
          <Feed />
        </div>

        <div className='basis-2/6 p-3 flex flex-col items-center bg-slate-600'>
          <div className='bg-red-100 '>
              sugestoes para voce
          </div>
          <div>
            <Friends />
          </div>
        </div>
      </div>
    </Theme>
  )
}