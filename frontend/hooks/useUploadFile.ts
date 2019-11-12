import { useCallback } from 'react'
import axios, { AxiosError } from 'axios'
import { IMAGE_UPLOAD_URL } from 'Lib/constants'

type UseUploadFile = (files: FileList | null) => Promise<{
  error?: null | AxiosError,
  uri?: {
    image?: string | null,
    largeImage?: string | null,
  },
}>

const useUploadFile = (): UseUploadFile => {
  const handleFileUpload = useCallback<UseUploadFile>(files => {
    async function body () {
      try {
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'sickfits')
        const { data: response } = await axios.post(IMAGE_UPLOAD_URL, data)
        return {
          uri: {
            image      : response.secure_url,
            largeImage : response.eager[0].secure_url,
          },
        }
      } catch (error) {
        return { error }
      }
    }
    return body()
  }, [])
  
  return handleFileUpload
}

export default useUploadFile
