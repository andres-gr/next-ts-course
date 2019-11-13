import { NextPage } from 'next'
import UpdateItem from 'Components/UpdateItem'
import withApollo from 'Lib/apollo'

const Update: NextPage = () => <UpdateItem />

export default withApollo(Update)
