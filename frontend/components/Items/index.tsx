import { FC } from 'react'
import { useAllItemsQuery } from 'GraphQL/types'
import styled from 'Styles/theme'
import ItemsList from 'Components/Items/ItemsList'
import Pagination from 'Components/Pagination'
import { PER_PAGE } from 'Lib/constants'

type ItemsProps = {
  page?: string
}

const Center = styled.div`
  text-align: center;
`

const Items: FC<ItemsProps> = ({ page }: ItemsProps) => {
  const currentPage = page
    ? parseInt(page, 10)
    : 1
  
  const skip = currentPage * PER_PAGE - PER_PAGE
  
  const {
    data,
    error,
    loading,
  } = useAllItemsQuery({
    variables: {
      first: PER_PAGE,
      skip,
    },
  })
  
  if (error) return <p>Error: { error.message }</p>
  
  const items = data?.items
  
  return (
    <Center>
      <Pagination />
      {
        loading
          ? <p>Loading...</p>
          : <ItemsList items={ items } />
      }
      <Pagination />
    </Center>
  )
}

export default Items
