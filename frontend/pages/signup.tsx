import { NextPage } from 'next'
import Signup from 'Components/Signup'
import withApollo from 'Lib/apollo'

const SignupPage: NextPage = () => <Signup />

export default withApollo(SignupPage)
