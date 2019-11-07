import { FC } from 'react'
import { useAllItemsQuery } from 'GraphQL/types'
import styled from 'Styles/theme'

const Center = styled.div`
  text-align: center;
`

const ItemsList = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`

const Items: FC = () => {
  const {
    data,
    error,
    loading,
  } = useAllItemsQuery()
  
  if (loading) return <p>Loading...</p>
  
  if (error) return <p>Error: { error.message }</p>
  
  return (
    <Center>
      <ItemsList>
        { data.items.map(item => (
          <p
            key={ item.id }
          >
            { item.title }
          </p>
        )) }
      </ItemsList>
    </Center>
  )
}

export default Items
