import {
  ChangeEvent,
  useCallback,
} from 'react'
import axios from 'axios'
import { useImmer } from 'Hooks/useImmer'
import { IMAGE_UPLOAD_URL } from 'Lib/constants'

const initState = {
  done    : false,
  error   : null,
  loading : false,
  uri     : {
    image      : null,
    largeImage : null,
  },
}

type UseUploadFile = [
  { state: typeof initState },
  (e: ChangeEvent<HTMLInputElement>) => void
]

const useUploadFile = (): UseUploadFile => {
  const [
    file,
    setFile,
  ] = useImmer({ state: initState })
  
  const handleFileUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    async function body () {
      setFile(({ state }) => {
        state.loading = true
        state.done = false
      })
      try {
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'sickfits')
        const { data: response } = await axios.post(IMAGE_UPLOAD_URL, data)
        setFile(({ state }) => {
          state.loading = false
          state.done = true
          state.uri = {
            image      : response.secure_url,
            largeImage : response.eager[0].secure_url,
          }
        })
      } catch (error) {
        setFile(draft => { draft.state = initState })
        console.log(error)
      }
    }
    if (files.length > 0) {
      body()
      return
    }
    setFile(({ state }) => { state.uri = initState.uri })
  }, [setFile])
  
  return [
    file,
    handleFileUpload,
  ]
}

export default useUploadFile
