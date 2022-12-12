import React, {FormEvent} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from '../components/Form/Input'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { api } from '../services/api'

interface CreatePostDialogProps{
  closeDialog: () => void
}

export function CreatePostDialog({closeDialog} : CreatePostDialogProps){
  const token = localStorage.getItem("token")

  const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		const form = event.target as HTMLFormElement
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
        <Dialog.Title className='text-2x1 font-black'> Novo Post </Dialog.Title >
        <form className='mt-8' onSubmit={handleSubmit}>
          <label htmlFor="Titulo" className='flex flex-col gap-3'>
            <Text asChild={false}> Titulo </Text>
            <Input type="text" placeholder='Diga o que está pensando...' id='title'></Input>
          </label>
          <label htmlFor="description" className='flex flex-col gap-3'>
            <Text asChild={false}> O que você está pensando? </Text>
            <Input type="text" placeholder='Diga o que está pensando...' id='description'></Input>
          </label>
          <footer className='mt-6 flex justify-between gap-4'>
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