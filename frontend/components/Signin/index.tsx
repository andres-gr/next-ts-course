import {
  FC,
  useCallback,
} from 'react'
import { Formik } from 'formik'
import signinSchema from 'Schemas/signin'
import delay from 'Lib/delay'
import { useSigninMutation } from 'GraphQL/types'
import { HandleSubmitSignin } from 'Utils/types'
import SigninFields from 'Components/Signin/Fields'
import { ME } from 'Documents/users/query.graphql'

const Signin: FC = () => {
  const [
    signin,
    {
      error,
      loading,
    },
  ] = useSigninMutation()
  
  const _handleSubmit = useCallback<HandleSubmitSignin>(async values => {
    await delay(1200)
    const response = await signin({
      refetchQueries : [{ query: ME }],
      variables      : values,
    })
    console.log(response)
  }, [signin])
  
  return (
    <Formik
      initialValues={ signinSchema.default() }
      validationSchema={ signinSchema }
      onSubmit={ _handleSubmit }
    >
      {
        props => (
          <SigninFields
            { ...props }
            error={ error }
            loading={ loading }
          />
        )
      }
    </Formik>
  )
}

export default Signin
