import {
  FastField,
  FormikProps,
  FormikValues,
} from 'formik'
import Form from 'Styles/Form'

const Fields = ({ handleSubmit }: FormikProps<FormikValues>) => (
  <Form onSubmit={ handleSubmit }>
    <fieldset>
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
      <button type="submit">
        Submit
      </button>
    </fieldset>
  </Form>
)

export default Fields
