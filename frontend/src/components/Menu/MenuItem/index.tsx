import React,{ReactNode} from 'react'
import { Text } from '../../Text'

interface MenuItemProps{
  menuTitle: string;
  children?: ReactNode;
}

export function MenuItem({ menuTitle, children} : MenuItemProps){
  return (
    <li className='mt-5'>
      <div className='flex items-center gap-4 px-4 rounded-full hover:bg-sky-400'>
        <figure>
          { children }
        </figure>
        <Text asChild={false} className="font-extrabold">
          { menuTitle }
        </Text>
      </div>
    </li>
  ) 
}