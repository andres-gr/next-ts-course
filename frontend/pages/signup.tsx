import { NextPage } from 'next'
import withApollo from 'Lib/apollo'
import Signup from 'Components/Signup'
import Signin from 'Components/Signin'

const SignupPage: NextPage = () => (
  <>
    <Signup />
    <Signin />
  </>
)

export default withApollo(SignupPage)
