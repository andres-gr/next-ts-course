import { NextPage } from 'next'
import SingleItem from 'Components/SingleItem'
import { NextInitProps } from 'Utils/types'
import withApollo from 'Lib/apollo'

const Item: NextPage = ({ query }: NextInitProps['pageProps']) => <SingleItem id={ query.id } />

export default withApollo(Item)
