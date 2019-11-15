import { useAllItemsQuery } from 'GraphQL/types'
import styled from 'Styles/theme'
import ItemsList from 'Components/Items/ItemsList'
import Pagination from 'Components/Pagination'

const Center = styled.div`
  text-align: center;
`

const Items = () => {
  const {
    data,
    error,
    loading,
  } = useAllItemsQuery()
  
  if (loading) return <p>Loading...</p>
  
  if (error) return <p>Error: { error.message }</p>
  
  const { items } = data
  
  return (
    <Center>
      <Pagination />
      <ItemsList items={ items } />
      <Pagination />
    </Center>
  )
}

export default Items
