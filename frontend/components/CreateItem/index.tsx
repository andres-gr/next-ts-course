import {
  FC,
  useCallback,
} from 'react'
import { useRouter } from 'next/router'
import {
  Formik,
  FormikProps,
  FormikValues,
} from 'formik'
import createItemSchema from 'Schemas/createItem'
import Fields from 'Components/CreateItem/Fields'
import {
  ItemCreateInput,
  useCreateItemMutation,
} from 'GraphQL/types'
import { useImmer } from 'Hooks/useImmer'
import useUploadFile from 'Hooks/useUploadFile'

type FileEvent = {
  state: {
    files?: FileList | null
  }
}

type HandleFileUpload = (files?: FileList | null) => void

type HandleSubmit = (data: ItemCreateInput, formikArgs: FormikProps<FormikValues>) => void

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
  ] = useImmer<FileEvent>(initState)
  
  const handleFileUpload = useUploadFile()
  
  const handleSetFile = useCallback<HandleFileUpload>(readFiles => {
    setFiles(({ state }) => { state.files = readFiles })
  }, [setFiles])
  
  const handleSubmit = useCallback<HandleSubmit>((data, { setSubmitting }) => {
    setSubmitting(true)
    async function body () {
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
      } catch (e) {
        console.warn(e)
        setSubmitting(false)
      }
    }
    body()
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
