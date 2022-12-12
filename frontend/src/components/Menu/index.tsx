
import { MdOutlineHome, MdPeopleOutline, MdPersonOutline } from 'react-icons/md'
import { MenuItem } from "./MenuItem";

export function Menu(){
  return(
    <ul>
      <MenuItem menuTitle="Página Inicial">
        <MdOutlineHome size={24} width={24}/>
      </MenuItem>
      <MenuItem menuTitle="Perfil">
       <MdPersonOutline size={24}/>
      </MenuItem>
      <MenuItem menuTitle= "Amigos">
        <MdPeopleOutline size={24}/>
      </MenuItem>
    </ul>
  )
}