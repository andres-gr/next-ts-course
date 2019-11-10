import { useCallback } from 'react'
import { Formik } from 'formik'
import createItemSchema from 'Schemas/createItem'
import Fields from 'Components/CreateItem/Fields'

const CreateItem = () => {
  const handleSubmit = useCallback((...args) => {
    console.log(args)
  }, [])
  
  return (
    <Formik
      component={ Fields }
      initialValues={ createItemSchema.default() }
      validationSchema={ createItemSchema }
      onSubmit={ handleSubmit }
    />
  )
}

export default CreateItem
