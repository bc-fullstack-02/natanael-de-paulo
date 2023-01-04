
import { MdOutlineHome, MdPeopleOutline, MdPersonOutline } from 'react-icons/md'
import { useState } from 'react'
import { MenuItem } from "./MenuItem";

import { Text } from '../../components/Text'

import logo_menu from "../../assets/logo_home.svg"
import { Link } from 'react-router-dom';

export function Menu(){
  return (
    <nav className='flex flex-col justify-between  px-4 text-white max-w-7xl mx-auto'>
      <div className='flex items-center'>
        <Link to='/home'>
          <img src={logo_menu} className="w-20 h-20"  alt="logo da section home" />
        </Link>
        {/* <Text asChild={false} className='font-extrabold ml-3'>
          Parrot
        </Text> */}
      </div>
      <ul className='flex flex-col gap-4'>
        <MenuItem menuTitle="Inicio" path="/home">
          <MdOutlineHome size={24} width={24}/>
        </MenuItem>
        <MenuItem menuTitle= "Amigos" path='/friends'>
          <MdPeopleOutline size={24}/>
        </MenuItem>
        <MenuItem menuTitle="Perfil" path='/profile'>
        <MdPersonOutline size={24}/>
        </MenuItem>
      </ul>
    </nav>
    
  )
}