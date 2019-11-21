import {
  FC,
  useCallback,
} from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import createItemSchema from 'Schemas/createItem'
import Fields from 'Components/Fields'
import {
  useSingleItemQuery,
  useUpdateItemMutation,
} from 'GraphQL/types'
import { useImmer } from 'Hooks/useImmer'
import useUploadFile from 'Hooks/useUploadFile'
import {
  Files,
  HandleFileUpload,
  HandleSubmit,
  UseUploadFileResult,
} from 'Utils/types'

type Where = { id: string }

const initState = {
  state: {
    files: null,
  },
}

const UpdateItem: FC = () => {
  const router = useRouter()
  
  const {
    query: { id },
  } = router
  
  const [
    updateItem,
    {
      error: updateError,
      loading: updateLoading,
    },
  ] = useUpdateItemMutation()
  
  const {
    data: { item } = { item: null },
    error: itemError,
    loading: itemLoading,
  } = useSingleItemQuery({
    variables: {
      where: { id } as Where,
    },
  })
  
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
  
  const handleSubmit = useCallback<HandleSubmit>((data, { setSubmitting }) => {
    setSubmitting(true)
    async function body () {
      try {
        let uri: UseUploadFileResult['uri'] = {}
        if (files) {
          const {
            error: uploadError,
            uri: uriData,
          } = await handleFileUpload(files)
          if (uploadError) throw uploadError
          uri = uriData
        }
        const variables = {
          data: {
            ...data,
            ...uri,
          },
          where: { id } as Where,
        }
        await updateItem({ variables })
        await router.push('/')
      } catch (e) {
        console.warn(e)
        setSubmitting(false)
      }
    }
    body()
  }, [
    files,
    handleFileUpload,
    id,
    router,
    updateItem,
  ])
  
  const error = updateError || itemError
  
  if (itemLoading) return <h2>Loading item...</h2>
  
  return (
    <Formik
      initialValues={ item || createItemSchema.default() }
      validationSchema={ createItemSchema }
      onSubmit={ handleSubmit }
    >
      {
        props => (
          <Fields
            { ...props }
            error={ error }
            handleSetFile={ handleSetFile }
            loading={ updateLoading }
          />
        )
      }
    </Formik>
  )
}

export default UpdateItem
