import { ReactNode } from 'react'
import { Menu } from '../Menu'
import { Text } from '../Text'

interface IProps{
  // open: boolean;
  // setOpen: any;
  // closeDialog: () => void;
  children: ReactNode
}

export function Theme({children} : IProps){
  return (
    <div className='max-w-[1366px] flex w-full h-full relative gap-4'>
      <aside className="border-r border-slate-400 basis-1/12 ">
        <Menu/>
      </aside>
      <main className='h-full flex basis-11/12 text-white px-1'>
        { children }
      </main>
    </div>
    
  )
}