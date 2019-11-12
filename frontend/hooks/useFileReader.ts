import {
  ChangeEvent,
  useCallback,
} from 'react'
import { useImmer } from 'Hooks/useImmer'

type UseFileReader = [
  {
    state: { fileUri?: string }
  },
  (e: ChangeEvent<HTMLInputElement>) => void
]

const initState = {
  state: { fileUri: null },
}

const useFileReader = (): UseFileReader => {
  const [
    fileUri,
    setFileUri,
  ] = useImmer<UseFileReader[0]>(initState)
  
  const handleFileChange = useCallback<UseFileReader[1]>(e => {
    const { files } = e.target
    if (files.length === 0) {
      setFileUri(({ state }) => { state.fileUri = null })
      return
    }
    const [item] = files
    const reader = new FileReader()
    reader.onload = function readFile () {
      setFileUri(({ state }) => { state.fileUri = this.result as string })
    }
    reader.readAsDataURL(item)
  }, [setFileUri])
  
  return [
    fileUri,
    handleFileChange,
  ]
}

export default useFileReader
