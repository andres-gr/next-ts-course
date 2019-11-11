import {
  ChangeEvent,
  useCallback,
  useEffect,
} from 'react'
import {
  FastField,
  FormikProps,
  FormikValues,
} from 'formik'
import Form from 'Styles/Form'
import DisplayError, { DisplayErrorProps } from 'Components/ErrorMessage'
import useUploadFile from 'Hooks/useUploadFile'

type FieldsProps = FormikProps<FormikValues> & DisplayErrorProps & { loading: boolean }

const Fields = ({
  error,
  handleSubmit,
  loading,
  setFieldValue,
}: FieldsProps) => {
  const [
    { state },
    handleFileUpload,
  ] = useUploadFile()
  
  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e)
  }, [handleFileUpload])
  
  useEffect(() => {
    if (state.done) {
      setFieldValue('image', state.uri.image)
      setFieldValue('largeImage', state.uri.largeImage)
      return
    }
    setFieldValue('image', undefined)
    setFieldValue('largeImage', undefined)
  }, [
    setFieldValue,
    state.done,
    state.uri.image,
    state.uri.largeImage,
  ])
  
  return (
    <Form onSubmit={ handleSubmit }>
      <DisplayError error={ error } />
      <fieldset
        aria-busy={ loading }
        disabled={ loading }
      >
        <label htmlFor="title">
          Title
          <FastField
            name="title"
          />
        </label>
        <label htmlFor="price">
          Price
          <FastField
            name="price"
            type="number"
          />
        </label>
        <label htmlFor="description">
          Description
          <FastField
            component="textarea"
            name="description"
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            disabled={ state.loading }
            name="file"
            placeholder="Upload an image"
            type="file"
            onChange={ handleFileChange }
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </fieldset>
    </Form>
  )
}

export default Fields
