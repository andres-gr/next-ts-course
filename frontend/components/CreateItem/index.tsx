import {
  FC,
  useCallback,
} from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import createItemSchema from 'Schemas/createItem'
import Fields from 'Components/CreateItem/Fields'
import {
  ItemCreateInput,
  useCreateItemMutation,
} from 'GraphQL/types'

const CreateItem: FC = () => {
  const [
    createItem,
    {
      error,
      loading,
    },
  ] = useCreateItemMutation()
  
  const router = useRouter()
  
  const handleSubmit = useCallback((data: ItemCreateInput) => {
    async function body () {
      const {
        data: {
          createItem: { id },
        },
      } = await createItem({
        variables: { data },
      })
      router.push(`/item/${id}`)
    }
    body()
  }, [
    createItem,
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
          loading={ loading }
        />
      ) }
    </Formik>
  )
}

export default CreateItem
