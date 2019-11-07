import { NextPage } from 'next'
import Items from 'Components/Items'
import withApollo from 'Lib/apollo'

const Index: NextPage = () => <Items />

export default withApollo(Index)
