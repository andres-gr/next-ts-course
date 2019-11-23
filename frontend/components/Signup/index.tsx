import {
  FC,
  useCallback,
} from 'react'
import { Formik } from 'formik'
import signupSchema from 'Schemas/signup'
import delay from 'Lib/delay'
import SignupFields from 'Components/Signup/Fields'
import { useSignupMutation } from 'GraphQL/types'
import { HandleSubmitSignup } from 'Utils/types'

const Signup: FC = () => {
  const [
    signup,
    {
      error,
      loading,
    },
  ] = useSignupMutation()
  
  const _handleSubmit = useCallback<HandleSubmitSignup>(async values => {
    await delay(1200)
    const response = await signup({ variables: values })
    console.log(response)
  }, [signup])
  
  return (
    <Formik
      initialValues={ signupSchema.default() }
      validationSchema={ signupSchema }
      onSubmit={ _handleSubmit }
    >
      {
        props => (
          <SignupFields
            { ...props }
            error={ error }
            loading={ loading }
          />
        )
      }
    </Formik>
  )
}

export default Signup
