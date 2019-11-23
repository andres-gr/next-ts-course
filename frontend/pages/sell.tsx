import { NextPage } from 'next'
import CreateItem from 'Components/CreateItem'
import withApollo from 'Lib/apollo'

const SellPage: NextPage = () => <CreateItem />

export default withApollo(SellPage)
