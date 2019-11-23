import {
  ChangeEvent,
  FC,
  useCallback,
} from 'react'
import {
  FastField,
  FormikProps,
  FormikValues,
} from 'formik'
import Form from 'Styles/Form'
import DisplayError, { DisplayErrorProps } from 'Components/ErrorMessage'
import useFileReader from 'Hooks/useFileReader'

type FieldsProps = FormikProps<FormikValues> & DisplayErrorProps & { loading: boolean } & { handleSetFile: (files?: FileList | null) => void }

const Fields: FC<FieldsProps> = ({
  error,
  handleSetFile,
  handleSubmit,
  isSubmitting,
  loading,
  values,
}: FieldsProps) => {
  const [
    {
      state: { fileUri },
    },
    handleFileChange,
  ] = useFileReader()
  
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e)
    const { files } = e.target
    if (files?.[0]) {
      handleSetFile(files)
      return
    }
    handleSetFile(null)
  }, [
    handleFileChange,
    handleSetFile,
  ])
  
  const busy = isSubmitting || loading,
        image = fileUri || values.image,
        saving = !busy ? 'Submit' : 'Saving'
  
  return (
    <Form onSubmit={ handleSubmit }>
      <DisplayError error={ error } />
      <fieldset
        aria-busy={ busy }
        disabled={ busy }
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
            name="file"
            placeholder="Upload an image"
            type="file"
            onChange={ onFileChange }
          />
          {
            image && (
              <img
                alt="Upload"
                src={ image }
                width="200"
              />
            )
          }
        </label>
        <button type="submit">
          { saving }
        </button>
      </fieldset>
    </Form>
  )
}

export default Fields
