import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreatePostButton(){
  return (
    <Dialog.Trigger className='mt-5 py-2 px-4 bg-sky-500 transition-colors hover:bg-cyan-300 container rounded-full max-w-sm' >
      Novo Post
    </Dialog.Trigger >
  )
}