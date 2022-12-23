import { ReactNode } from 'react'
import { Menu } from '../Menu'

interface IProps{
  // open: boolean;
  // setOpen: any;
  // closeDialog: () => void;
  children: ReactNode
}

export function Theme({children} : IProps){
  return(
    <div className='w-screen h-screen flex text-white'>
      <div className='basis-1/6 border-r border-slate-400 p-3 p'>
        <Menu/>
      </div>
      
      <div className='flex-1 overflow-y-auto scroll-smooth'>
        { children }
      </div>
      <div className='basis-1/6 border-l border-slate-400 p-3 p'>
        
      </div>
    </div>
  )
}