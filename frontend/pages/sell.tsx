import { NextPage } from 'next'
import CreateItem from 'Components/CreateItem'
import withApollo from 'Lib/apollo'

const Sell: NextPage = () => <CreateItem />

export default withApollo(Sell)
