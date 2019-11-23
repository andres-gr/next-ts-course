import { NextPage } from 'next'
import UpdateItem from 'Components/UpdateItem'
import withApollo from 'Lib/apollo'

const UpdatePage: NextPage = () => <UpdateItem />

export default withApollo(UpdatePage)
