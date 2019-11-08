import { useAllItemsQuery } from 'GraphQL/types'
import styled from 'Styles/theme'
import ItemsList from 'Components/Items/ItemsList'

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
      <ItemsList items={ items } />
    </Center>
  )
}

export default Items
