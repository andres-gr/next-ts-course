import { FC } from 'react'
import { FastField } from 'formik'
import { SignupFormikArgs } from 'Utils/types'
import Form from 'Styles/Form'
import { ApolloError } from 'apollo-client'
import DisplayError from 'Components/ErrorMessage'

type SignupFieldsProps = SignupFormikArgs & {
  error?: ApolloError
  loading: boolean
}

const SignupFields: FC<SignupFieldsProps> = ({
  error,
  handleSubmit,
  isSubmitting,
  loading,
}: SignupFieldsProps) => {
  const isLoading = loading || isSubmitting
  
  const btnText = isLoading ? 'Signing Up!' : 'Sign Up!'
  
  return (
    <Form
      method="POST"
      onSubmit={ handleSubmit }
    >
      <fieldset
        aria-busy={ isSubmitting }
        disabled={ isSubmitting }
      >
        <h2>Sign Up for an Account</h2>
        <DisplayError error={ error } />
        <label htmlFor="name">
          Name
          <FastField
            name="name"
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="email">
          Email
          <FastField
            name="email"
            placeholder="Enter a valid email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <FastField
            name="password"
            placeholder="Enter a secure password"
            type="password"
          />
        </label>
        <button type="submit">
          { btnText }
        </button>
      </fieldset>
    </Form>
  )
}

export default SignupFields
