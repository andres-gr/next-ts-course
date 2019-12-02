import { FC } from 'react'
import { FastField } from 'formik'
import { SigninFormikArgs } from 'Utils/types'
import Form from 'Styles/Form'
import { ApolloError } from 'apollo-client'
import DisplayError from 'Components/ErrorMessage'

type SigninFieldsProps = SigninFormikArgs & {
  error?: ApolloError
  loading: boolean
}

const SigninFields: FC<SigninFieldsProps> = ({
  error,
  handleSubmit,
  isSubmitting,
  loading,
}: SigninFieldsProps) => {
  const isLoading = loading || isSubmitting
  
  const btnText = isLoading ? 'Signing In!' : 'Sign In!'
  
  return (
    <Form
      method="POST"
      onSubmit={ handleSubmit }
    >
      <fieldset
        aria-busy={ isSubmitting }
        disabled={ isSubmitting }
      >
        <h2>Sign into your account</h2>
        <DisplayError error={ error } />
        <label htmlFor="email">
          Email
          <FastField
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <FastField
            name="password"
            placeholder="Enter your password"
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

export default SigninFields
