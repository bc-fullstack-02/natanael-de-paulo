import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Menu } from "../../components/Menu"
import { Text } from '../../components/Text'

import logo_menu from "../../assets/logo_home.svg"
import { CreatePostButton } from '../../components/CreatePostButton'
import { CreatePostDialog } from '../../CreatePostDialog'

export function Home(){
  const [open, setOpen] = useState(false)
  const closeDialog = () => {
    setOpen(!open)
  }

  return (
    <section className='w-screen h-screen flex text-white'>
      <div className='basis-1/6 border-r border-slate-400 p-3 p'>
        <div className='flex items-center ml-4'>
          <img src={logo_menu} alt="logo da section home" />
          <Text asChild className='font-extrabold ml-3'>
            Parrot
          </Text>
        </div>
        <Menu />
        <div className='flex items-center'>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <CreatePostButton />
            <CreatePostDialog closeDialog={closeDialog}/>
          </Dialog.Root>
        </div>
      </div>
      <div className='basis-5/6'>feed</div>
    </section>
  )
}