import React, {FormEvent} from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Button } from '../Button'
import { Text } from '../Text'
import { api } from '../../services/api'
import { Input } from '../AuthForm/Input'
import { AiOutlineUser } from 'react-icons/ai'

interface CreatePostDialogProps{
  closeDialog: () => void
  user: string | null
}

interface FormElements extends HTMLFormControlsCollection{
	title: HTMLInputElement;
	description: HTMLInputElement;
}

interface FormElement extends HTMLFormElement{
	readonly elements: FormElements;
}


export function CreatePostDialog({closeDialog, user} : CreatePostDialogProps){
  const token = localStorage.getItem("token")

  const handleSubmit = async (event: FormEvent<FormElement>) => {
		event.preventDefault()
		const form = event.currentTarget
    const newPost = {
      title: form.elements.title.value,
      description: form.elements.description.value
    }
    try {
      await api.post('/posts', newPost, { headers: { Authorization : `Bearer ${token}`}});
      closeDialog();
    } catch (error) {
      console.error(error);
    }
	}

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
      
      <Dialog.Content 
        className='
          bg-[#2A2634] 
          py-8 px-10 
          text-white 
          fixed 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-lg w-[30em]
          shadow-lg shadow-black/25
        '
      >
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <AiOutlineUser size={32} className="text-slate-50"/>
            {user}
          </div>
          <Dialog.Title className='text-2x1 font-black'> Novo Post </Dialog.Title >
        </div>
        <form className='mt-8 space-y-2' onSubmit={handleSubmit}>
          <label htmlFor="Titulo" className='flex flex-col gap-2'>
            <Text> Titulo </Text>
            <Input type="text" placeholder='Escolha um titulo para seu post...' id='title'></Input>
          </label>
          <label htmlFor="description" className='flex flex-col gap-2'>
            <Text> O que você está pensando? </Text>
            <textarea placeholder='Diga o que está pensando...' id='description' className='w-full bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 shadow appearance-none focus:outline-none focus:shadow-outline  autofill:bg-transparent break-words whitespace-pre-wrap'></textarea>
          </label>
          <footer className='flex justify-between gap-4'>
            <Button type='submit' className='max-w-[10em]'>
                Postar
            </Button>
            <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 '>
              Fechar
            </Dialog.Close>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}