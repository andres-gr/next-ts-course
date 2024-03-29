import { useCallback } from 'react'
import axios from 'axios'
import { IMAGE_UPLOAD_URL } from 'Lib/constants'
import { UseUploadFile } from 'Utils/types'

const useUploadFile = (): UseUploadFile => {
  const handleFileUpload = useCallback<UseUploadFile>(async files => {
    try {
      const data = new FormData()
      if (files?.[0]) data.append('file', files[0])
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
  }, [])
  
  return handleFileUpload
}

export default useUploadFile
