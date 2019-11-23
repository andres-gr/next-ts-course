import { FC } from 'react'
import styled from 'Styles/theme'
import Item from 'Components/Items/Item'
import { Item as ItemProps } from 'GraphQL/types'

type ItemsListProps = {
  items?: ItemProps[]
}

const StyledItemsList = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`

const ItemsList: FC<ItemsListProps> = ({ items }: ItemsListProps) => (
  <StyledItemsList>
    {
      items?.map(item => (
        <Item
          key={ item.id }
          { ...item }
        />
      ))
    }
  </StyledItemsList>
)

export default ItemsList
