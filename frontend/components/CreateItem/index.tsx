import {
  FC,
  useCallback,
} from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import createItemSchema from 'Schemas/createItem'
import Fields from 'Components/Fields'
import { useCreateItemMutation } from 'GraphQL/types'
import { useImmer } from 'Hooks/useImmer'
import useUploadFile from 'Hooks/useUploadFile'
import {
  Files,
  HandleFileUpload,
  HandleSubmit,
} from 'Utils/types'
import delay from 'Lib/delay'

const initState = {
  state: {
    files: null,
  },
}

const CreateItem: FC = () => {
  const router = useRouter()
  
  const [
    createItem,
    {
      error,
      loading,
    },
  ] = useCreateItemMutation()
  
  const [
    {
      state: { files },
    },
    setFiles,
  ] = useImmer<Files>(initState)
  
  const handleFileUpload = useUploadFile()
  
  const handleSetFile = useCallback<HandleFileUpload>(readFiles => {
    setFiles(({ state }) => { state.files = readFiles })
  }, [setFiles])
  
  const handleSubmit = useCallback<HandleSubmit>(async (data, { setSubmitting }) => {
    try {
      const {
        error: uploadError,
        uri,
      } = await handleFileUpload(files)
      if (uploadError) throw uploadError
      const variables = {
        data: {
          ...data,
          ...uri,
        },
      }
      const {
        data: {
          createItem: { id },
        },
      } = await createItem({ variables })
      router.push(`/item/${id}`)
      await delay(2000)
    } catch (e) {
      console.warn(e)
      setSubmitting(false)
    }
  }, [
    createItem,
    files,
    handleFileUpload,
    router,
  ])
  
  return (
    <Formik
      initialValues={ createItemSchema.default() }
      validationSchema={ createItemSchema }
      onSubmit={ handleSubmit }
    >
      { props => (
        <Fields
          { ...props }
          error={ error }
          handleSetFile={ handleSetFile }
          loading={ loading }
        />
      ) }
    </Formik>
  )
}

export default CreateItem
