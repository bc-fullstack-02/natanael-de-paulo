
import { MdOutlineHome, MdPeopleOutline, MdPersonOutline } from 'react-icons/md'
import { useState } from 'react'
import { MenuItem } from "./MenuItem";

import { Text } from '../../components/Text'

import logo_menu from "../../assets/logo_home.svg"


interface IProps{
  open: boolean;
  setOpen: any;
  closeDialog: () => void;
}



export function Menu(){
  return (
    <>
      <div className='flex items-center ml-4'>
        <img src={logo_menu} alt="logo da section home" />
        {/* <Text asChild={false} className='font-extrabold ml-3'>
          Parrot
        </Text> */}
      </div>
      <ul>
        <MenuItem menuTitle="Página Inicial" path="/home">
          <MdOutlineHome size={24} width={24}/>
        </MenuItem>
        <MenuItem menuTitle="Perfil" path='/profile'>
        <MdPersonOutline size={24}/>
        </MenuItem>
        <MenuItem menuTitle= "Amigos" path='/friends'>
          <MdPeopleOutline size={24}/>
        </MenuItem>
      </ul>
    </>
    
  )
}