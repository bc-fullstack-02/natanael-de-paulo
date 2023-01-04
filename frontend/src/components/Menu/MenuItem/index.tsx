import React,{ReactNode} from 'react'
import { Link } from 'react-router-dom';
import { Text } from '../../Text'

interface MenuItemProps{
  menuTitle: string;
  children?: ReactNode;
  path: string
}

export function MenuItem({ menuTitle, children, path} : MenuItemProps){
  return (
    <Link to={path}>
      <li className='flex items-center gap-2 px-4 rounded-full hover:bg-sky-400'>
        <figure>
          { children }
        </figure>
        <Text asChild={false} size="md" className="font-extrabold">
          { menuTitle }
        </Text>
      </li>
    </Link>
   
  ) 
}