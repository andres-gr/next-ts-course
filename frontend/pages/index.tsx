import { NextPage } from 'next'
import Items from 'Components/Items'
import withApollo from 'Lib/apollo'
import { PageProps } from 'Utils/types'

const Index: NextPage<PageProps> = ({ query }: PageProps) => <Items page={ query?.page } />

export default withApollo(Index)
