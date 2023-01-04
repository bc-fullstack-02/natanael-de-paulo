import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface Props{
  onFileUploaded: (file: File) => void
}

export function DropZone({onFileUploaded} : Props) {
const [selectedFileUrl, setSelectedFileUrl] = useState('')
  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>selectedFileUrl</p>
      }
    </div>
  )
}