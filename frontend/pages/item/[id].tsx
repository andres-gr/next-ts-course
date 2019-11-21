import { NextPage } from 'next'
import SingleItem from 'Components/SingleItem'
import withApollo from 'Lib/apollo'
import { PageProps } from 'Utils/types'

const Item: NextPage<PageProps> = ({ query }: PageProps) => <SingleItem id={ query?.id } />

export default withApollo(Item)
